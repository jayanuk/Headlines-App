
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using StaffScanner.Exam.Domain.Entities;

namespace StaffScanner.Exam.Application.Interfaces
{
    public  interface IApplicationDbContext
    {
        DbSet<HeadLineItem> HeadLineItems{ get; }

        DbSet<Comment> Comments { get; }

        DbSet<Rating> Ratings { get; }

        DbSet<Vote> Votes { get; }

        Task<int> SaveChangesAsync(CancellationToken cancellationToken);
    }
}
