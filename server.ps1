$port = 8080
$root = "d:\homepage"
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$port/")
try {
    $listener.Start()
    Write-Host "Server started at http://localhost:$port/"
    Write-Host "Press Ctrl+C to stop the server."

    while ($listener.IsListening) {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response
        
        $relativeUrl = $request.Url.LocalPath.TrimStart('/')
        if ($relativeUrl -eq "") { $relativeUrl = "index.html" }
        
        $path = Join-Path $root $relativeUrl
        if (Test-Path $path -PathType Container) {
            $path = Join-Path $path "index.html"
        }

        if (Test-Path $path) {
            $content = [System.IO.File]::ReadAllBytes($path)
            $extension = [System.IO.Path]::GetExtension($path).ToLower()
            $contentType = switch ($extension) {
                ".html" { "text/html; charset=utf-8" }
                ".css"  { "text/css" }
                ".js"   { "application/javascript" }
                ".json" { "application/json" }
                ".png"  { "image/png" }
                ".jpg"  { "image/jpeg" }
                ".jpeg" { "image/jpeg" }
                ".svg"  { "image/svg+xml" }
                default { "application/octet-stream" }
            }
            $response.ContentType = $contentType
            $response.ContentLength64 = $content.Length
            $response.OutputStream.Write($content, 0, $content.Length)
        } else {
            $response.StatusCode = 404
            $errorMsg = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found: $relativeUrl")
            $response.OutputStream.Write($errorMsg, 0, $errorMsg.Length)
        }
        $response.Close()
    }
} finally {
    $listener.Stop()
}
