using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;

namespace Persistence
{
    public class SeedData
    {
        public static async Task Seed(DataContext dbContext)
        {
            if (dbContext.Learnings.Any()) return;

            var learnings = new List<Learning> {
                new Learning {
                    Question = "First question",
                    Answer = "Answer",
                    CompletedTests = "initial",
                    NextTestOn = DateTime.Now.AddDays(1),
                    Result = ""
                }
            };

            await dbContext.Learnings.AddRangeAsync(learnings);
            await dbContext.SaveChangesAsync();
        }
    }
}