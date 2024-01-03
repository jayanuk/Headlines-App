using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using StaffScanner.Exam.Domain.Entities;

namespace StaffScanner.Exam.Application.Interfaces;
public interface INewsApiService
{
    public Task<HeadLineListDto> GetData();
}
