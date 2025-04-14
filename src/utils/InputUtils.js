export const allowOnlyNumbers = (value) => {
    return value.replace(/\D/g, "");
};

export const allowOnlyLetters = (value) => {
    return value.replace(/[^a-zA-ZğüşöçıİĞÜŞÖÇ\s]/g, "");
};


export const makeWordsCapitalize = (value) => {
    // Harf dışındaki karakterleri kaldır, "Ə" harfini de ekleyelim
    const cleanedValue = value.replace(/[^a-zA-ZğüşöçıİĞÜŞÖÇəƏ\s]/g, "");
  
    // Her kelimenin ilk harfini büyük, geri kalanını küçük yap
    const capitalizedValue = cleanedValue
      .split(" ") // Kelimelere ayır
      .map(word => 
        word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() // İlk harfi büyük, diğerlerini küçük yap
      )
      .join(" "); // Kelimeleri tekrar birleştir
  
    return capitalizedValue;
  };
  




export const formatBirthDate = (value) => {
    // Sadece rakamları al
    const cleaned = value.replace(/\D/g, "");

    // Gün (2 karakter)
    if (cleaned.length <= 2) return cleaned;

    // Gün.Ay (2+2 karakter)
    if (cleaned.length <= 4) return `${cleaned.slice(0, 2)}.${cleaned.slice(2)}`;

    // Gün.Ay.Yıl (2+2+4 karakter)
    return `${cleaned.slice(0, 2)}.${cleaned.slice(2, 4)}.${cleaned.slice(4, 8)}`;
};


export const formatPhoneNumber = (value) => {
    // Sadece rakamları al
    const cleaned = value.replace(/\D/g, "");

    // 3 rakamdan sonra tire eklemek için
    if (cleaned.length <= 3) {
        return cleaned;
    } else if (cleaned.length <= 6) {
        return `${cleaned.slice(0, 3)}-${cleaned.slice(3)}`;
    } else if (cleaned.length <= 8) {
        return `${cleaned.slice(0, 3)}-${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
    } else {
        // Son iki rakamdan sonra tire ekle
        return `${cleaned.slice(0, 3)}-${cleaned.slice(3, 6)}-${cleaned.slice(6, 8)}-${cleaned.slice(8, 10)}`;
    }
};



