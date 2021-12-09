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
            if (dbContext.Skills.Any()) return;

            var skills = new List<Skill> {
                new Skill {
                    Question = "First question",
                    Answer = "Answer",
                    NextTestOn = DateTime.Now.AddDays(1),
                    Result = ""
                }
            };

            await dbContext.Skills.AddRangeAsync(skills);
            await dbContext.SaveChangesAsync();
        }
    }
}