using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Domain;

namespace Persistence
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            CreateMap<Skill, Skill>();
        }
    }
}