using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StaffScanner.Exam.Domain.Entities;
public class HeadLineListDto
{
    public int TotalResults { get; set; }
    public List<HeadLineItemDto> Articles { get; set; } = new List<HeadLineItemDto>();
}
