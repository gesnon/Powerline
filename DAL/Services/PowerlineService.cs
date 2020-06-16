using DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace DAL.Services
{
    public class PowerlineService
    {
        private Context _context;
        public PowerlineService(Context context)
        {
            _context = context;
        }
        public List<Powerline> GetPowerlines()
        {
            return _context.Powerlines.ToList();
        }
    }
}
