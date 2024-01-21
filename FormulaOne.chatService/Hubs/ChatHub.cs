using FormulaOne.chatService.DataService;
using FormulaOne.chatService.Models;
using Microsoft.AspNetCore.SignalR;

namespace FormulaOne.chatService.Hubs
{
    public class ChatHub(ShareDb shareDb) : Hub
    {
        private readonly ShareDb _sharedb = shareDb;

        public async Task JoinChat(UserConnection conn)
        {
            await Clients.All.SendAsync(method: "ReceiveMessage", arg1: "admin", arg2: $"{conn.username} has joined");
        }

        public async Task JoinSpecificChatRoom(UserConnection conn)
        {
            await Groups.AddToGroupAsync(Context.ConnectionId, groupName: conn.chatRoom);
            _sharedb.Connections[Context.ConnectionId] = conn;
            await Clients.Group(conn.chatRoom).SendAsync(method: "ReceiveMessage", arg1: "admin", arg2: $"{conn.username} has joined {conn.chatRoom}");
        }

        public async Task SendMessage(string msg)
        {
            if(_sharedb.Connections.TryGetValue(Context.ConnectionId, out UserConnection conn))
            {
                await Clients.Group(conn.chatRoom).SendAsync(method:"ReceiveSpecificMessage", arg1:conn.username, arg2:msg);
            }
        }
    }
}