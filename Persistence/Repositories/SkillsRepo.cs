using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Application.RepositoryInterfaces;
using AutoMapper;
using Domain;
using Microsoft.EntityFrameworkCore;

namespace Persistence.Repositories
{
    public class SkillsRepo : ISkillsRepo
    {
        private readonly DataContext dataContext;
        private readonly IMapper mapper;

        public SkillsRepo(DataContext dataContext, IMapper mapper)
        {
            this.dataContext = dataContext;
            this.mapper = mapper;
        }

        public async Task CreateSkillAsync(Skill skill)
        {
            dataContext.Skills.Add(skill);
            await dataContext.SaveChangesAsync();
        }

        public async Task DeleteSkillAsync(Guid id)
        {
            var skill = await dataContext.Skills.FindAsync(id);
            dataContext.Skills.Remove(skill);
            await dataContext.SaveChangesAsync();
        }

        public async Task<Skill> GetSkillAsync(Guid Id)
        {
            return await dataContext.Skills.FindAsync(Id);
        }

        public async Task<List<Skill>> GetSkillsAsync(CancellationToken cancellationToken)
        {
            return await dataContext.Skills.ToListAsync(cancellationToken);
        }

        public async Task ModifySkillAsync(Skill updatedSkill)
        {
            var originalSkill = await dataContext.Skills.FindAsync(updatedSkill.Id);
            mapper.Map(updatedSkill, originalSkill);
            await dataContext.SaveChangesAsync();
        }
    }
}