document.getElementById('zodiacForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const sign1 = document.getElementById('sign1').value;
    const sign2 = document.getElementById('sign2').value;
    
    const compatibility = getCompatibility(sign1, sign2);
    
    document.getElementById('result').innerHTML = compatibility;
});

function getCompatibility(sign1, sign2) {
    const compatibilityData = {
        aries: {
            taurus: "Bạch Dương và Kim Ngưu có thể gặp khó khăn trong việc hiểu nhau do tính cách đối lập.",
            gemini: "Bạch Dương và Song Tử có thể hợp nhau vì đều yêu thích sự năng động và sáng tạo.",
            cancer: "Bạch Dương và Cự Giải có thể gặp khó khăn do tính cách khác biệt.",
            leo: "Bạch Dương và Sư Tử đều mạnh mẽ, dễ dàng thu hút nhau và có sự hòa hợp cao.",
            virgo: "Bạch Dương và Xử Nữ có thể gặp khó khăn do tính cách thực tế của Xử Nữ.",
            libra: "Bạch Dương và Thiên Bình có sự hòa hợp tốt vì sự cân bằng của Thiên Bình.",
            scorpio: "Bạch Dương và Bọ Cạp có thể gặp khó khăn do tính cách mạnh mẽ của cả hai.",
            sagittarius: "Bạch Dương và Nhân Mã đều yêu thích sự phiêu lưu, dễ dàng thu hút nhau.",
            capricorn: "Bạch Dương và Ma Kết có thể gặp khó khăn do tính cách nghiêm túc của Ma Kết.",
            aquarius: "Bạch Dương và Bảo Bình đều yêu thích sự sáng tạo và mới mẻ.",
            pisces: "Bạch Dương và Song Ngư có thể gặp khó khăn do tính cách mơ mộng của Song Ngư."
        },
        taurus: {
            aries: "Kim Ngưu và Bạch Dương có thể gặp khó khăn trong việc hiểu nhau do tính cách đối lập.",
            gemini: "Kim Ngưu và Song Tử có thể gặp khó khăn do Kim Ngưu thích sự ổn định trong khi Song Tử thích sự mới mẻ.",
            cancer: "Kim Ngưu và Cự Giải đều yêu thích sự ổn định và có sự hòa hợp cao.",
            leo: "Kim Ngưu và Sư Tử có thể gặp khó khăn do tính cách mạnh mẽ của Sư Tử.",
            virgo: "Kim Ngưu và Xử Nữ đều thực tế và có sự hòa hợp tốt.",
            libra: "Kim Ngưu và Thiên Bình có thể gặp khó khăn do Thiên Bình thích sự thay đổi.",
            scorpio: "Kim Ngưu và Bọ Cạp có thể thu hút nhau nhưng cần cẩn thận với tính cách mạnh mẽ của cả hai.",
            sagittarius: "Kim Ngưu và Nhân Mã có thể gặp khó khăn do Nhân Mã thích sự tự do.",
            capricorn: "Kim Ngưu và Ma Kết đều thực tế và có sự hòa hợp cao.",
            aquarius: "Kim Ngưu và Bảo Bình có thể gặp khó khăn do Bảo Bình thích sự mới mẻ.",
            pisces: "Kim Ngưu và Song Ngư có thể thu hút nhau nhưng cần cẩn thận với tính cách mơ mộng của Song Ngư."
        },
        gemini: {
            aries: "Song Tử và Bạch Dương có thể hợp nhau vì đều yêu thích sự năng động và sáng tạo.",
            taurus: "Song Tử và Kim Ngưu có thể gặp khó khăn do Kim Ngưu thích sự ổn định trong khi Song Tử thích sự mới mẻ.",
            cancer: "Song Tử và Cự Giải có thể gặp khó khăn do Cự Giải thích sự ổn định.",
            leo: "Song Tử và Sư Tử đều yêu thích sự sáng tạo và có sự hòa hợp cao.",
            virgo: "Song Tử và Xử Nữ có thể gặp khó khăn do Xử Nữ thích sự thực tế.",
            libra: "Song Tử và Thiên Bình có sự hòa hợp tốt vì cả hai đều yêu thích sự giao tiếp.",
            scorpio: "Song Tử và Bọ Cạp có thể gặp khó khăn do Bọ Cạp thích sự sâu sắc.",
            sagittarius: "Song Tử và Nhân Mã đều yêu thích sự phiêu lưu, dễ dàng thu hút nhau.",
            capricorn: "Song Tử và Ma Kết có thể gặp khó khăn do Ma Kết thích sự nghiêm túc.",
            aquarius: "Song Tử và Bảo Bình đều yêu thích sự sáng tạo và mới mẻ.",
            pisces: "Song Tử và Song Ngư có thể gặp khó khăn do Song Ngư thích sự mơ mộng."
        },
        cancer: {
            aries: "Cự Giải và Bạch Dương có thể gặp khó khăn do tính cách khác biệt.",
            taurus: "Cự Giải và Kim Ngưu đều yêu thích sự ổn định và có sự hòa hợp cao.",
            gemini: "Cự Giải và Song Tử có thể gặp khó khăn do Cự Giải thích sự ổn định.",
            leo: "Cự Giải và Sư Tử có thể gặp khó khăn do tính cách mạnh mẽ của Sư Tử.",
            virgo: "Cự Giải và Xử Nữ đều thực tế và có sự hòa hợp tốt.",
            libra: "Cự Giải và Thiên Bình có thể gặp khó khăn do Thiên Bình thích sự thay đổi.",
            scorpio: "Cự Giải và Bọ Cạp đều sâu sắc và có sự hòa hợp cao.",
            sagittarius: "Cự Giải và Nhân Mã có thể gặp khó khăn do Nhân Mã thích sự tự do.",
            capricorn: "Cự Giải và Ma Kết đều thực tế và có sự hòa hợp cao.",
            aquarius: "Cự Giải và Bảo Bình là các cung hoàng đạo có sự hòa hợp cao, over hợp. Các cặp đôi Cự Giải - Bảo Bình tương trợ lẫn nhau làm cho mối quan hệ của họ phát triển hòa hợp. Điều này giúp họ xây dựng một mối quan hệ sâu sắc và thú vị.",
            pisces: "Cự Giải và Song Ngư đều mơ mộng và có sự hòa hợp cao."
        },
        leo: {
            aries: "Sư Tử và Bạch Dương đều mạnh mẽ, dễ dàng thu hút nhau và có sự hòa hợp cao.",
            taurus: "Sư Tử và Kim Ngưu có thể gặp khó khăn do tính cách mạnh mẽ của Sư Tử.",
            gemini: "Sư Tử và Song Tử đều yêu thích sự sáng tạo và có sự hòa hợp cao.",
            cancer: "Sư Tử và Cự Giải có thể gặp khó khăn do tính cách mạnh mẽ của Sư Tử.",
            virgo: "Sư Tử và Xử Nữ có thể gặp khó khăn do Xử Nữ thích sự thực tế.",
            libra: "Sư Tử và Thiên Bình có sự hòa hợp tốt vì sự cân bằng của Thiên Bình.",
            scorpio: "Sư Tử và Bọ Cạp có thể gặp khó khăn do tính cách mạnh mẽ của cả hai.",
            sagittarius: "Sư Tử và Nhân Mã đều yêu thích sự phiêu lưu, dễ dàng thu hút nhau.",
            capricorn: "Sư Tử và Ma Kết có thể gặp khó khăn do Ma Kết thích sự nghiêm túc.",
            aquarius: "Sư Tử và Bảo Bình đều yêu thích sự sáng tạo và mới mẻ.",
            pisces: "Sư Tử và Song Ngư có thể gặp khó khăn do tính cách mơ mộng của Song Ngư."
        },
        virgo: {
            aries: "Xử Nữ và Bạch Dương có thể gặp khó khăn do tính cách thực tế của Xử Nữ.",
            taurus: "Xử Nữ và Kim Ngưu đều thực tế và có sự hòa hợp tốt.",
            gemini: "Xử Nữ và Song Tử có thể gặp khó khăn do Xử Nữ thích sự thực tế.",
            cancer: "Xử Nữ và Cự Giải đều thực tế và có sự hòa hợp tốt.",
            leo: "Xử Nữ và Sư Tử có thể gặp khó khăn do Xử Nữ thích sự thực tế.",
            libra: "Xử Nữ và Thiên Bình có thể gặp khó khăn do Thiên Bình thích sự thay đổi.",
            scorpio: "Xử Nữ và Bọ Cạp đều sâu sắc và có sự hòa hợp cao.",
            sagittarius: "Xử Nữ và Nhân Mã có thể gặp khó khăn do Nhân Mã thích sự tự do.",
            capricorn: "Xử Nữ và Ma Kết đều thực tế và có sự hòa hợp cao.",
            aquarius: "Xử Nữ và Bảo Bình có thể gặp khó khăn do Bảo Bình thích sự mới mẻ.",
            pisces: "Xử Nữ và Song Ngư có thể gặp khó khăn do Song Ngư thích sự mơ mộng."
        },
        libra: {
            aries: "Thiên Bình và Bạch Dương có sự hòa hợp tốt vì sự cân bằng của Thiên Bình.",
            taurus: "Thiên Bình và Kim Ngưu có thể gặp khó khăn do Thiên Bình thích sự thay đổi.",
            gemini: "Thiên Bình và Song Tử có sự hòa hợp tốt vì cả hai đều yêu thích sự giao tiếp.",
            cancer: "Thiên Bình và Cự Giải có thể gặp khó khăn do Thiên Bình thích sự thay đổi.",
            leo: "Thiên Bình và Sư Tử có sự hòa hợp tốt vì sự cân bằng của Thiên Bình.",
            virgo: "Thiên Bình và Xử Nữ có thể gặp khó khăn do Thiên Bình thích sự thay đổi.",
            scorpio: "Thiên Bình và Bọ Cạp có thể gặp khó khăn do Bọ Cạp thích sự sâu sắc.",
            sagittarius: "Thiên Bình và Nhân Mã đều yêu thích sự phiêu lưu, dễ dàng thu hút nhau.",
            capricorn: "Thiên Bình và Ma Kết có thể gặp khó khăn do Ma Kết thích sự nghiêm túc.",
            aquarius: "Thiên Bình và Bảo Bình đều yêu thích sự sáng tạo và mới mẻ.",
            pisces: "Thiên Bình và Song Ngư có thể gặp khó khăn do Song Ngư thích sự mơ mộng."
        },
        scorpio: {
            aries: "Bọ Cạp và Bạch Dương có thể gặp khó khăn do tính cách mạnh mẽ của cả hai.",
            taurus: "Bọ Cạp và Kim Ngưu có thể thu hút nhau nhưng cần cẩn thận với tính cách mạnh mẽ của cả hai.",
            gemini: "Bọ Cạp và Song Tử có thể gặp khó khăn do Bọ Cạp thích sự sâu sắc.",
            cancer: "Bọ Cạp và Cự Giải đều sâu sắc và có sự hòa hợp cao.",
            leo: "Bọ Cạp và Sư Tử có thể gặp khó khăn do tính cách mạnh mẽ của cả hai.",
            virgo: "Bọ Cạp và Xử Nữ đều sâu sắc và có sự hòa hợp cao.",
            libra: "Bọ Cạp và Thiên Bình có thể gặp khó khăn do Bọ Cạp thích sự sâu sắc.",
            sagittarius: "Bọ Cạp và Nhân Mã có thể gặp khó khăn do Nhân Mã thích sự tự do.",
            capricorn: "Bọ Cạp và Ma Kết đều thực tế và có sự hòa hợp cao.",
            aquarius: "Bọ Cạp và Bảo Bình có thể gặp khó khăn do Bảo Bình thích sự mới mẻ.",
            pisces: "Bọ Cạp và Song Ngư đều mơ mộng và có sự hòa hợp cao."
        },
        sagittarius: {
            aries: "Nhân Mã và Bạch Dương đều yêu thích sự phiêu lưu, dễ dàng thu hút nhau.",
            taurus: "Nhân Mã và Kim Ngưu có thể gặp khó khăn do Kim Ngưu thích sự ổn định trong khi Nhân Mã thích sự tự do.",
            gemini: "Nhân Mã và Song Tử đều yêu thích sự phiêu lưu, dễ dàng thu hút nhau.",
            cancer: "Nhân Mã và Cự Giải có thể gặp khó khăn do Cự Giải thích sự ổn định.",
            leo: "Nhân Mã và Sư Tử đều yêu thích sự phiêu lưu, dễ dàng thu hút nhau.",
            virgo: "Nhân Mã và Xử Nữ có thể gặp khó khăn do Xử Nữ thích sự thực tế.",
            libra: "Nhân Mã và Thiên Bình đều yêu thích sự phiêu lưu, dễ dàng thu hút nhau.",
            scorpio: "Nhân Mã và Bọ Cạp có thể gặp khó khăn do Bọ Cạp thích sự sâu sắc.",
            capricorn: "Nhân Mã và Ma Kết có thể gặp khó khăn do Ma Kết thích sự nghiêm túc.",
            aquarius: "Nhân Mã và Bảo Bình đều yêu thích sự sáng tạo và mới mẻ.",
            pisces: "Nhân Mã và Song Ngư có thể gặp khó khăn do Song Ngư thích sự mơ mộng."
        },
        capricorn: {
            aries: "Ma Kết và Bạch Dương có thể gặp khó khăn do tính cách nghiêm túc của Ma Kết.",
            taurus: "Ma Kết và Kim Ngưu đều thực tế và có sự hòa hợp cao.",
            gemini: "Ma Kết và Song Tử có thể gặp khó khăn do Ma Kết thích sự nghiêm túc.",
            cancer: "Ma Kết và Cự Giải đều thực tế và có sự hòa hợp cao.",
            leo: "Ma Kết và Sư Tử có thể gặp khó khăn do Ma Kết thích sự nghiêm túc.",
            virgo: "Ma Kết và Xử Nữ đều thực tế và có sự hòa hợp cao.",
            libra: "Ma Kết và Thiên Bình có thể gặp khó khăn do Ma Kết thích sự nghiêm túc.",
            scorpio: "Ma Kết và Bọ Cạp đều thực tế và có sự hòa hợp cao.",
            sagittarius: "Ma Kết và Nhân Mã có thể gặp khó khăn do Ma Kết thích sự nghiêm túc.",
            aquarius: "Ma Kết và Bảo Bình có thể gặp khó khăn do Bảo Bình thích sự mới mẻ.",
            pisces: "Ma Kết và Song Ngư có thể gặp khó khăn do Song Ngư thích sự mơ mộng."
        },
        aquarius: {
            aries: "Bảo Bình và Bạch Dương đều yêu thích sự sáng tạo và mới mẻ.",
            taurus: "Bảo Bình và Kim Ngưu có thể gặp khó khăn do Kim Ngưu thích sự ổn định trong khi Bảo Bình thích sự mới mẻ.",
            gemini: "Bảo Bình và Song Tử đều yêu thích sự sáng tạo và mới mẻ.",
            cancer: "Cự Giải và Bảo Bình là các cung hoàng đạo có sự hòa hợp cao, over hợp. Các cặp đôi Cự Giải - Bảo Bình tương trợ lẫn nhau làm cho mối quan hệ của họ phát triển hòa hợp. Điều này giúp họ xây dựng một mối quan hệ sâu sắc và thú vị.",
            leo: "Bảo Bình và Sư Tử đều yêu thích sự sáng tạo và mới mẻ.",
            virgo: "Bảo Bình và Xử Nữ có thể gặp khó khăn do Xử Nữ thích sự thực tế.",
            libra: "Bảo Bình và Thiên Bình đều yêu thích sự sáng tạo và mới mẻ.",
            scorpio: "Bảo Bình và Bọ Cạp có thể gặp khó khăn do Bọ Cạp thích sự sâu sắc.",
            sagittarius: "Bảo Bình và Nhân Mã đều yêu thích sự sáng tạo và mới mẻ.",
            capricorn: "Bảo Bình và Ma Kết có thể gặp khó khăn do Ma Kết thích sự nghiêm túc.",
            pisces: "Bảo Bình và Song Ngư có thể gặp khó khăn do Song Ngư thích sự mơ mộng."
        },
        pisces: {
            aries: "Song Ngư và Bạch Dương có thể gặp khó khăn do tính cách mơ mộng của Song Ngư.",
            taurus: "Song Ngư và Kim Ngưu có thể thu hút nhau nhưng cần cẩn thận với tính cách mơ mộng của Song Ngư.",
            gemini: "Song Ngư và Song Tử có thể gặp khó khăn do Song Ngư thích sự mơ mộng.",
            cancer: "Song Ngư và Cự Giải đều mơ mộng và có sự hòa hợp cao.",
            leo: "Song Ngư và Sư Tử có thể gặp khó khăn do tính cách mơ mộng của Song Ngư.",
            virgo: "Song Ngư và Xử Nữ có thể gặp khó khăn do Xử Nữ thích sự thực tế.",
            libra: "Song Ngư và Thiên Bình có thể gặp khó khăn do Song Ngư thích sự mơ mộng.",
            scorpio: "Song Ngư và Bọ Cạp đều mơ mộng và có sự hòa hợp cao.",
            sagittarius: "Song Ngư và Nhân Mã có thể gặp khó khăn do Song Ngư thích sự mơ mộng.",
            capricorn: "Song Ngư và Ma Kết có thể gặp khó khăn do Song Ngư thích sự mơ mộng.",
            aquarius: "Song Ngư và Bảo Bình có thể gặp khó khăn do Song Ngư thích sự mơ mộng."
        }
    };

    if (sign1 === sign2) {
        return "Hai cung hoàng đạo này có thể hợp nhau vì có nhiều điểm tương đồng.";
    }

    return compatibilityData[sign1][sign2] || "Không có dữ liệu cho cặp cung hoàng đạo này.";
}
