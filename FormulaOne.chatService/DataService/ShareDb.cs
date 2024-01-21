using System.Collections.Concurrent;
using FormulaOne.chatService.Models;

namespace FormulaOne.chatService.DataService
{
    public class ShareDb
    {
        private readonly ConcurrentDictionary<string, UserConnection> _connections = new();
        public ConcurrentDictionary<string, UserConnection> Connections => _connections;
    }
}