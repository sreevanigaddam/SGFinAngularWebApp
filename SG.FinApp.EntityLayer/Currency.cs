using System;

namespace SG.FinApp.EntityLayer.Entities
{
    public class Currency : IEquatable<Currency>
    {
        public int Id { get; set; }
        public string CurrencyName { get; set; }
        public string CurrencyCode { get; set; }
        public DateTime Date { get; set; }

        public bool isEditing { get; set; }

        public bool Equals(Currency? other)
        {
            if (other is null) return false;
            if (ReferenceEquals(this, other)) return true;
            return Id == other.Id;// &&
            //       CurrencyName == other.CurrencyName &&
            //       CurrencyCode == other.CurrencyCode &&
            //       Date == other.Date;
        }

      
        public override int GetHashCode()
        {
            return HashCode.Combine(Id, CurrencyName, CurrencyCode, Date);
        }

        public static bool operator ==(Currency left, Currency right)
        {
            return Equals(left, right);
        }

        public static bool operator !=(Currency left, Currency right)
        {
            return !Equals(left, right);
        }
    }
}
