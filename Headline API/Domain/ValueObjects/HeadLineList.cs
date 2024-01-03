using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StaffScanner.Exam.Domain.ValueObjects;
public class HeadLineList
{
    public int TotalResults { get; set; }
    public List<HeadLineItem> Articles { get; set; } = new List<HeadLineItem>();
}
