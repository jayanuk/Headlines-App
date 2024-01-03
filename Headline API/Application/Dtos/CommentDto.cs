using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StaffScanner.Exam.Application.Dtos
{
    public  class CommentDto
    {
        public int Id { get; set; }
        public long HeadLineId { get; set; }
        public string? CommentText { get; set; }

        public DateTime CreatedTime { get; set; }

        public int Points { get; set; }

        public string CreatedBy { get; set; }
    }
}
