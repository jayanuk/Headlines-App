using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http.Headers;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using StaffScanner.Exam.Domain.Entities;
using System.Net;
using StaffScanner.Exam.Application.Interfaces;
using System.Net.Http;

namespace StaffScanner.Test.Infrastructure.ThirdPartyAPI;
public class NewsApiService : INewsApiService
{
    private readonly HttpClient? client;
    private readonly IConfiguration configuration;

    public NewsApiService(IConfiguration configuration)
    {
        this.configuration = configuration;
        
        var url = configuration.GetSection("External_API").GetValue<string>("NewsAPI_BaseUrl");

        client = new HttpClient()
        {
            BaseAddress = new Uri(url),   //Ensure the URL ends with a slash...
        };
        client.DefaultRequestHeaders.Clear();
        client.DefaultRequestHeaders.UserAgent.ParseAdd("Mozilla/5.0 (compatible; AcmeInc/1.0)");
        client.DefaultRequestHeaders.Accept.Add( new MediaTypeWithQualityHeaderValue("application/json"));
    }   

    public async Task<HeadLineListDto> GetData()
    {
        var result = new HeadLineListDto();
        var path = configuration.GetSection("External_API").GetValue<string>("NewsAPI_HeadLines");
        var apiKey = configuration.GetSection("External_API").GetValue<string>("NewsAPI_KEY");
        
        if(client != null && !string.IsNullOrEmpty(path) && !string.IsNullOrEmpty(apiKey))
        {
            var response = await client.GetAsync(path + apiKey);

            if (response.IsSuccessStatusCode)
            {
                var stringResponse = await response.Content.ReadAsStringAsync();

                result = JsonSerializer.Deserialize<HeadLineListDto>(stringResponse,
                    new JsonSerializerOptions() { PropertyNamingPolicy = JsonNamingPolicy.CamelCase });
            }
            else
            {
                result = null;
            }
        }

        return result;
    }
}
