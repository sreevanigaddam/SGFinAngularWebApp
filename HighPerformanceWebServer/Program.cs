using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Hosting;

public class Program
{
    public static void Main(string[] args)
    {
        CreateHostBuilder(args).Build().Run();
    }

    public static IHostBuilder CreateHostBuilder(string[] args) =>
        Host.CreateDefaultBuilder(args)
            .ConfigureWebHostDefaults(webBuilder =>
            {
                webBuilder.UseKestrel(options =>
                {
                    // Configure Kestrel to handle a high number of concurrent connections
                    options.Limits.MaxConcurrentConnections = 10;
                    options.Limits.MaxConcurrentUpgradedConnections = 10;
                    options.Limits.MaxRequestBodySize = 10 * 1024; // 10 KB
                    options.Limits.KeepAliveTimeout = TimeSpan.FromMinutes(2);
                    options.Limits.RequestHeadersTimeout = TimeSpan.FromMinutes(1);
                })
                .UseStartup<Startup>();
            })
            .ConfigureLogging(logging =>
            {
                logging.ClearProviders();
                logging.AddConsole();
                logging.SetMinimumLevel(LogLevel.Information);
            });
}
