﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Reflection.Metadata;
using System.Text;
using System.Threading.Tasks;

namespace StaffScanner.Exam.Domain.Entities;
public class Rating : BaseAuditableEntity
{
    public int HeadLineItemId { get; set; }

    [Required]
    public int Value { get; set; }

    public HeadLineItem HeadLineItem { get; set; } = null;
}
