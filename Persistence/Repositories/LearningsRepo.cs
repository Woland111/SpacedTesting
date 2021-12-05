using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.RepositoryInterfaces;
using Domain;
using Microsoft.EntityFrameworkCore;

namespace Persistence.Repositories
{
    public class LearningsRepo : ILearningsRepo
    {
        private readonly DataContext dataContext;

        public LearningsRepo(DataContext dataContext)
        {
            this.dataContext = dataContext;
        }

        public async Task CreateLearningAsync(Learning learning)
        {
            dataContext.Learnings.Add(learning);
            await dataContext.SaveChangesAsync();
        }

        public async Task<Learning> GetLearningAsync(Guid Id)
        {
            return await dataContext.Learnings.FindAsync(Id);
        }

        public async Task<List<Learning>> GetLearningsAsync()
        {
            return await dataContext.Learnings.ToListAsync();
        }

        public async Task ModifyLearningAsync(Guid id, Learning learning)
        {
            var existingLearning = await dataContext.Learnings.FindAsync(id);
            existingLearning.Question = learning.Question;
            existingLearning.Answer = learning.Answer;
            existingLearning.CompletedTests = learning.CompletedTests;
            existingLearning.NextTestOn = learning.NextTestOn;
            existingLearning.Result = learning.Result;
            await dataContext.SaveChangesAsync();
        }
    }
}