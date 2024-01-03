using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StaffScanner.Exam.Domain.Entities
{
    public class Vote : BaseAuditableEntity
    {
        [Required]
        public int CommentId { get; set; }

        [Required]
        public int Point { get; set; }

        public Comment Comment { get; set; } = null;
    }
}
