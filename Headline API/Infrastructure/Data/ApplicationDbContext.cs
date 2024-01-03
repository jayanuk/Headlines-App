
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Reflection.Emit;
using System.Reflection.Metadata;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using StaffScanner.Exam.Application.Interfaces;
using StaffScanner.Exam.Domain.Entities;

namespace StaffScanner.Exam.Infrastructure.Data
{
    public class ApplicationDbContext : DbContext, IApplicationDbContext
    {
        public DbSet<HeadLineItem> HeadLineItems => Set<HeadLineItem>();

        public DbSet<Comment> Comments => Set<Comment>();

        public DbSet<Rating> Ratings => Set<Rating>();

        public DbSet<Vote> Votes => Set<Vote>();

        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());          

            base.OnModelCreating(builder);
        }
    }
}
