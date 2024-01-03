using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices.Marshalling;
using System.Text;
using System.Threading.Tasks;

namespace StaffScanner.Exam.Domain.Entities;
public class HeadLineItemDto
{
    public int Id { get; set; }
    public HeadLineSourceDto Source { get; set; } = new HeadLineSourceDto();

    public string? Author { get; set; }

    public string? Title { get; set; }

    public string? Description { get; set; }

    public string? Url { get; set; }

    public string? UrlToImage { get; set; }

    public DateTime? PublishedAt { get; set; }

    public string? Content { get; set; }
}
