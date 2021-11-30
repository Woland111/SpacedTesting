using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Domain
{
    public class Learning
    {
        public Guid Id { get; set; }

        public string Question { get; set; }

        public string Answer { get; set; }

        public DateTime NextTestOn { get; set; }

        public string CompletedTests { get; set; }

        public string Result { get; set; }
    }
}