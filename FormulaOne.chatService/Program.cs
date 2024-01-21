using FormulaOne.chatService.DataService;
using FormulaOne.chatService.Hubs;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddSignalR();

builder.Services.AddControllers();

builder.Services.AddCors(CorsOptions => {
    CorsOptions.AddPolicy("reactApp", policy =>{
        policy.WithOrigins("http://localhost:3000").AllowCredentials().AllowAnyHeader().AllowAnyMethod();
    });
});

builder.Services.AddSingleton<ShareDb>();

var app = builder.Build();

app.MapControllers();


app.MapHub<ChatHub>(pattern:"/Chat");
app.UseCors("reactApp");

app.Run();
