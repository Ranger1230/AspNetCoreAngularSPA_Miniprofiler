# AspNetCoreAngularSPA_Miniprofiler
A sample ASP.Net Core SPA app with Angular utilizing MiniProfiler

It uses the `<mini-profiler />` tag to generate the html script tag, and Angular calls the Razor page on initialize and inserts the script into the HTML.
Hopefully there will be a better way of doing this in the future. But at the moment MiniProfiler doesn't have a supported way to work with the ASP.NET Core SPA logic.

# Sources
HttpInterceptor: https://gist.github.com/Shaddix/d5585f46334efa86ad3e685541869c18
.net setup: https://miniprofiler.com/dotnet/AspDotNetCore
