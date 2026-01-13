
import React, { useState } from 'react';

const About: React.FC = () => {
  const [imgError, setImgError] = useState<Record<string, boolean>>({});

  const handleImageError = (id: string) => {
    setImgError(prev => ({ ...prev, [id]: true }));
  };

  const images = {
    main: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    side1: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&q=80",
    side2: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITERUSEhIVFhUVGBcVFRUVFRUXFxcVFhYWFxUVFRcYHSggGBolHRUVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGhAQGC0dHx8tLSstLS0tLS0tKy0tLS0tLS0tLS0tLS0tLS0tLSsrLS0tLS0tKy0tLS0tLS8tLSs3Lf/AABEIALMBGgMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAEAAEDBQYCBwj/xAA/EAABAwIEAwUFBgUDBAMAAAABAAIRAyEEEjFBBRNRBiJhcYEyUpGhsRQjQmLR8AcVweHxJDNygqKy0kNTkv/EABgBAQEBAQEAAAAAAAAAAAAAAAABAgME/8QAKREBAAMAAQMCBAcBAAAAAAAAAAECESEDEjFBcRMikbFRYYGSwdHwBP/aAAwDAQACEQMRAD8A82hKFJlSyrLSKEoUmVLKgjhaLsbhvvDUOjZ+iocq9A7JcL+6EjW/xVQa/itU2pMt1KmZhcY78bQPJXmFwLRFpKsadGFdTGV/lOK/+4f/AJUNVmMZcw4eGq1WJwzz7DwPRVeIpYllw5rx0Ig/FNFTQ4oTZwhd13hwsuefTqOh7eXU6HQ+XVR4jCvYZAkeCCoxJgoV5Vhjmy2YIPiqklZaC1zBg6HTwQweQdUbXbIgqtJIOU6jQ+CAqpWkQnwFc06gcDvfyQjzukHoPT6MOYCDMhYztVgcv3o29r9UZ2V4g6eWTYK74lghUY9p0IKzeNhaz2y86wWGdXpVHAGG6HrGqqIXofZeth3UuTTgOpy1zTrIt6rJcc4fkqPIjLOm4VrxwWnZ1VQkuoTwtMuUl1CUIOUl1CUIOUl1CUIOUk8JQgZJOlCBkkoSQWWRNkRWRNy1FDZEsiJyJctBFhqGZ7R1K9U4eW0qQLzAAsOtlhuzGCL67YExden0OFtBDiMzhpOg8lUl3hc7gDlIB239V3Wwg1dm+JR1NjtypRCIz5oUp7lctcNs/wBQVI0VNCcw6hF8R4NQrDv0xOxFj6ELN4zCYjC9+i4vYNWOufQ/qmhuPYMFpMd4XlUOH40+mcrri0HXZXVLtHSrdx4yugSD4hUvG8LldMSx2/p1VVJxXjBezKGDxIVFmRpoEEkGRf8AcoNupkf0WZWHBKDx1GWyNRojyzp/dQOCKrKT5HjululVbkfOztfNTZFARgnlrgQYWtxfGmUqBl0ucIaN5WQpBVONcWVg4kkeKqCcIH0nioLOmSes6yj8TV5oc7c6qbnMq0u6LhB4Gxc2FJgVnLT5EZWpQ4rjlqgbIlkRPLS5aAXIlkRXLTctANkSyInlpuWgGyJZETy0uWgFyJZETy03LQDZUsqI5aWRUXPLS5aK5aXLUAnLXdLDlxDWgknQBWPD+GPrPDGCSfkvUOzPZanhwHOALzqf0QU3Yfs0+iDUqCHO0HQLYciAjA1cVQdgiBjTUI8E+Ixjm6tssnxTiL6NTO0ksdt0KDTVKsbIDEPBCDpcTFUSDeNPMShq9bxQZLttwfIftFObe1l6DeP7rng/E21mZCQZA85yjYrRvxbXzTduN/Jef8awJwuJzNkMdESJFgLSP0TVXbyadRzHixmCFWGQ5xBkdPXputBRjEMItImDrGvwVVVwLm5g4QY1Fwb6rNvDt0O34le7xvPshLbfomdTud/8/FTNaYA1FyPL6hPAk7a/VWJ1Or0+y01V2Lwgc2BqdPPzQdEGL6iyvculp8fX96qorjI+xgOIkHrf0RzdUWoDj+GzMzDUK0c2Cdrx9f0XWJpS0j0KCh7M4jK+4sreu6K4MQHKTs/wsOd3rNBXXaFo53d/CtSjnH0bg9ULy1bVG5qYPkheWpAD5aXLRnLTctAJy03LRnLS5aAPlpuWjeWm5aAPlpuWjeWm5aAPlpuWjeWm5aALlpctGctLlILflqbCYJ1Rwa0XKl5a1/ZDhg9oi5v6Ii67N8GbQp2HeOpV1RBN9kiNlISAqHXNQpiSdLLio9o1cPioA+IE5bfBZvFUGVWuZoT9dlocXXB0IPkQsrxqkWnmNte+yKywxFSjULSLtgdNh0VqcSKrbGHgC3WyE7RVC4Nq7kAOkbxY3QvZzhVXF4gU6QAytD3PJIa1ogSbGTewH0kiKhfUeKlj0kA+A21+SvOI4BuLw8FvfaARsZhafE/w6bUhxxBDgIJFMQY3gu/qiOH9m30HAZxUZYSBEQIu2THxUHn/AGb4Y7mOFxd2o89xr8ldYjhD+8XCbefzXoOG4KxricovdSYnhrYKuGvF8RhoaNoJHXQx+9ULUmTvr9fiFsuNYAtNQRMHN6OE6jxBWSxNMZnajXxvP76rMcPX1p77W/dHtPMx/P1RM2On+UBxCjmYbTvI13v/AJVgNt/8/FDuA8Rp/X4LTyAMJVzNN7h0EHrf0+iN6za/6qurAsqnQh59Z73qjwdbxff1QcPxTqcxpe48PBAYt2ZpfMk6Df4IzGMtMaTceQVISTO8jyOv76qxPCNJwOrno/JS8tVfZGvIczcE666rRPo3RAHLS5aMNJNy0UJy03LRnLS5aAPlpctF8tLloA+Wly0Zy03LQCctNy0Zy0uWgD5ablozlpctBc4bD5nBvUr0ThFENb5CAsfwel95PRbPDGGgKoPpaeJTVHtaMzjoo8MZKXEKLHDK/RBju0Pax8ltIQOqyFbHYlxJk6O6+6V6VU4bhBqD8l1RZhm+zSafO5+amLryE1cUXANFUuNgGS4k9GtiT8VoxU4hQ/36FXlkm7qZcIm0lmaPWF6lgsKBDxTa1x/KAQPTSUQSYF+izMtRGvMG8JOJaRh2mXgWmGtsL5tgtl2X4IMDTLS8PqVCC94EDuiGtHUDvGT7x8leVcQWtJjSSqjjuJ/07ngmSJaR43BCxa2Q3SmzEOOLcZ0pj1Mo3BYkZWtJu6IHlBJXnuGxNV1QZzOmrYOg3Vh/N2sxuV1oa1mtrX6dXFcuneZtMy79anZWKw9NameLITBYwOFlJXxQAsb7L168LF9rmZXh14LS0wCd5abeqwOOcS50CfOJ1tpdbPt3xYDII9pk7+85vx7qwGKxLS52u/Q7jyXOz29HqRsRNefT39P6KR3ZEf56f3UO2vSx9eq7Y+cve9D5+NlwdLj1Hr6KvNPkNxXDZmukRex+PVRYPE5mkTJaYIPr+9Ue7eDF/wBeiqce00qmcAFrnAGPXYKoOd6jX6KpNLvEWOmljqrUOGxImfoFW44EEGx00sdf3skCfs7TyYktnUaHzWvDf36rJ4arFai8HWxB81saIknzVZQ8v97Lk00ZkXLmIBOWly0Vy0uWgE5aXLRfLTctALy0uWiuWly0AnLS5aL5abIgF5aXLRWRLloNDwkQVpaBWd4cLrUcMp2JO31VBDSKbfE3QD2vqGB8dlYPoSZd8FI1sGANeiCvHBx+KXnoLBWFDD0qYsBmETvF9l3XrCmL+19FXwCJG+q52v6Q6VpvMrJ+IEapUXS0Kpa0x5KXguJJztcbtcQPKAR8yR6LEW2XSaccDaot8fqsR2qxrms5GkmWG+k3b6T81uMTtfc/VZXtZgC6mS0S9suaPzQYHrp6rHVjh06FstDK4F/Ldd0wADfcgQAOv6ql7X16jMYbSC1r5yg6iCJjq0qHhVQ1MQwOcbQ7LEXIEk31XXbzDuzUq8iCDSJuO8O8B8C74LPS4tjp/wBMbGtT2X7TONQ09gKxtr3KdR25jZabGY4vZmmCNTsRMZp2EyDIlp1EEhecdicPWfiHOLappZMQ01GBz8pNKoJblmXbBovJ6rXtr1KWoDvebYNe0iBUYbC7R4NI9yHCl6oeGWc/iLXPNo97K7k31B/3auoGh63WQfXdLtDr7pOvxWk7eOZzqDXAwKQ7wJzZDWqwIduB1AOxAiBFxDsM9r3ZK9PKXFoz5wfaEZg1pA1G8GReCFMFPRr+yS2LxuN/FStqiLE7f13UXEOGVMJVZTqObLhm7pd7OdzQYIkXadQoWPMag6Xt49VI44db/NHf9ff8f1++j3PN7g339eq4x1APY5pbvt6qMnW2+0+Kk5kE6i/6+SrkqOF4qCaTiZBdE9ICIx9PMw2B0080PxyiQRVabgnUeA8FLhcQKjJgTAmCr+Yk4EzM6nr3TofNbbC/7jh+9VjOydqzmHMIJIB81ssGfvjp+ytSyMLFyWInImLUA2RLIiMqWVQD5EsiIypsiAfIlkRGRLIgHyJZERkSyIBsiWRE5E2RBZ4A95X+HxcHJss3w1/3gVxTvUPkfqI+hVF7SqqLC8UY6rVpsIc+iGZwPw8zNlB8YbMeIWW7a9pPsODfVEGqe5SB0L3aEjoBJ9Fn/wCBznmjiqznFzqtVuZxMlzg0kkn/qCzachqkct3jsaXEjKfNAdmOJl761JxksIcP+LjBHoR81YZDzCSgMThWU6zcSLOALXxo5huZHgQDPh4ry87r2cTE1XsgSszxDGGhiaVWYYXCnV/4usHeGUkGek9VeYyruFn+PUeZTIm5CXk6URvPquu0HHG0GZjrfdYTEdqnVH30t8/VPxY1KuGY4l2ZncfrOYAXPmC0+qzOV4dodBq2dvELNrTOutKRWBT6zaeLe8D2gH2PVoJ26yrx3FcM6gadZrXte4ENdfoQfArLcZc4ODgNaYHsjUDy8Qq6iS4CQPZb1Gw6J6a6/LORL3zgpZymZSAIMAQABBsABaFJjKlN1qjWu2BIuN7O1BtPpO0nzXsrxuoKopbfeDU27j9JK07ceKrZuLXBsYgG3R4kGBrZzdQW9q22OHkv0oi3LNfxSweXlVabgGNaaZZMFpLnuHe3Bhwg6EeJWpxlNuZwIa+XOAOgPeJg+hIcOhnUsjEduuK8t1JjIdDG1CZljoNQNAtdhBMjoY2Wyq0pNRrBBzuqgTpmLnF7TsJzGb3FhDQutd9Xm6kRvDz/wDiC8uxlIhjoFIN7wdPdxGIbBO5EQTeSCZMrPUnd2CCNI262urvt9WFTF0nk3NGnPdi/MqG4J7rr3GxlZykYFnEaeHXoklLdqwLxfX2vP3lMKlz3t9/VDcwme9cH82ne8NV0XXN2+10Hj1Ci2rnjxKbEszNIsfa+g8FQYUGk/QQY0Pj5q/Y7/jq7cdB0KFrYUOBsNtD4+a1DArgNOMVmEgFp8tVquGOmsZ8fqsn2YOWuGkHQwfXyWtwNq8XsP6qovMqYtSzJ23ICqOcqWVE/ZvFM7DwJlAPlSypZksygWVNlT5ksyBsqWVdZkpQc5Usq6lKUDcMf94FZ8PxYc50ESJBE3EPc2/nCz2ErQ4FE8ApZcTXvILaZt1JqGPNF9GP/i3j82JpU57tGm6oRtmcYHrDfmrT+EfFmMwFZmYNcKuYde8wAH4tKwXbfH83FYl82zik3yZY/T5qv7PY403xMB1pOgO0+HX+yxeJms46UmItGvoTD8VztzA338+iavjA4EeH9F5twTjhY4tcCJs5p2OxH7uFfHjsNIaLwe96ErybMcS9sVjzDTcN4i11M03GXU+7E3y/hPwEX90oPjfG2MBGZn/GQfU7T6rA1sZVFQ1GuFwWvHeu34aj96qTF0ZcTmFyfe6+SbONdtYnVlhOJ5316NoqMbUZdvttaA4a7tIP/QqqvTh22g/E3p5oXE0Mr2VA67cp30ygH5SjMRQlwM6gaCdkxe7XXEKJcxpG0D2hoW+fgEPhMNUa/XukAjvCxyid0XjK1OiwCo4jMBAAkmBfQ+So+JcXL+6zMxhAmwk90anNYeAW60mXO/VrVd4Pip+2UWU3gDmtDn5m3l0Q3WNfajx2V1h+Ive0sqAuqs7sSxrqoAzFsTlbiGtk5ZyvHea4NJWCwVRra7XSRlqB3s+66Z18Fu3cNbLjTkZIYWwHNa1js0Agj7oEEtiDSIzNOVr20vTWsRDw2tNp2VN26xAqVaTmxBoCc2ubnV80h/e12Ommy3hqPH3wtDnZiDmgFxJccpkzGeNTlc0C4nz/ALbPY51F4c4k0LiLDLVrN1JkEEOBaQMuWPAbptMUapeHZm1g2ZAIFQZWQRbMczRTjU5aOoa4urLEdqKebHU2kiHCiDPLzAOIkdC4SRaxIsiK3YoAPLcQTBPdNBgc0NJEPioJuWjMIE6gSCoOOEDH0rzl+yAOzNcCOXSIM5YcL6wJ6DRa/Bh0y05gXlrHEzUpvDnAUifxtsQxxMkZqT7tRXnGNw7qVWrTIbLKjmzpOUuAcBNgRBHmk4e1AGt7+d9VdV+B/acdi2tc2mRVaQL5XGqXHukDWTafaLhoSoeJ8C5VI1Wue6KjWFpYGkSHmQQ506aRvOizMN1tHifCrYfyjV2/gPFNU6xsN/FcZfynV1vQaWTESNNhr5pCWrh+HOisHRe+/itd2XoufUJ3M6nx8lhqLoqtsNTv4+a9E7INhx0338VphdV6BYJJ+CioO7wRXFXd0ef9FV8wrSLuVzUdY+RVR9pd7xRGCl5ILjEbFBxmTsMkBHfy9nV3x/sgMW0MfA8DdQWf2BvUqvrWcR0KlbjKp2HwQlZzplwiVRY0WNLQYXT6bYNkFTxsACE7scDaPmg4zJZk/wBnPVL7OeqgpRUVlg8a1tOq8Dv5C4/myNMKi5iRcCCDoRB8jqg8t4g8w2dXFzz5k/5Q1N6ue1PDnU6rjHcsG+DdlQqwstRwjGNeBTc/I8CKdQ6eFOp+XodvJHMxVRjy2o/JAfPdzCzHagkLGU6kK5wPFgfu6oL25X31c0ct1gTqPArnaka6V6kxGa054zRDe9UGmoaB8i8oat2hw9E1Gh9WoS9xghpAMmQ2IgeCx2JpUgTkzOGoMgW6Hum6Lr0Gmo/un23fi/MejVPhVPi3W3FO02fuClILWTmOoLWnQI7A8ZqAS+mCC1kGYNm6WbEfolguzwAFSowDushpzTZjfav8k+OsfZGg+g6qzWvjCL23dQcWx5quBcNGtAANgInp4oWq8T7I0bu73R4qWrmJs2bN0YPdHguaofO4s38v4R5KwzM75NUqDM7ut/F73Q/mXpIfya9SpTENNRzntgS1xdmzjbKRBcOmWpbvled97Obzd1s/n7rp+C3mNw551TlvAfmqHK5pBLeYXOloIztzOklhzNc4kZXuLathmVL2+fL6RZEfZz+FtiK+IsZFvI973u9K9FxtMVWPbkGZrspENcDFqbiHC7HtDabhpYie9K827b5XHD90tJw4mIIP3tYCNBEg3AAIIgAL0PAYtrXV81MkGpiGGnZ0te9+Ysv3mEm4N2OzWjLAlh+0Ls+Plz8mYUHAkO1NGmW5h7TQTAvcdLLYVKcuqAROZwcJPeGaJERcWBAIcO6Ae61z8bx6m049rMzng/ZgXvJc4g0qQzOJu4xBJOslbjEYdwe+o2XNDjzGOnO25vYAubDrGJgyCZLawlmsI0nH4sZi456USbkupvIgkQ5x6ReSIvCm7bOJwzi6R95SJ0h1qut7EFwJ6yDecznwlMu4himgZg91CwyucWnDVHk2jN10IImAJBFnxtodTbmNjWw0GMwM4hoyPkzBDjczvmvMh5fA2B1dv4DwUjBP4SDA1tN/LVercUwLPszy2mxjm0qhcGMa0E8o6gCdSPI5Tvag7PdksM+hRqvY9zqjA4gudGsS3LBsYkbZgbqY3W+ezzfEHK8WAg9fzea3nAsU5uhAt/VZZnA8VXaHUqAe0ktDpESDcZi6wHwV5whzhYiC2WkdCHQRMXVJrE+J/wB9mmNd9S0zHkuTQf8AsqLh9SSZkeaNLlXOYwJVYW3Km4di2scS6YIiyi4g/ujz/VA0ySQBug0f82p9T8EPjKL6jszRYgRMBVn2R/h8VfYN33bfIKhqVJwAEbBA8Qqiwkbq1zLLYl/fd5n6oCGOkgeKtP5X+f5f3VDTqwZ6QfgVbfzwe5/3IC6ogwuMyqMVjy5xcJA6SovtLvePxUFRzE/MQnMS5iK7x1AVW5T6fosBxTAGk8t21B/e63nMQfFMC2s2DZwuD+qDA5VPgh3ri2Wppb/437q8p9nHzcjzkK14X2PzOkvbEOBiTq1w8OqumMrhqQd3W0ySbAFxMnyaAvROEcCbTc6pUa0vzOIFyGyTe5PeRvDODUaAljBmi7jJPpJsrGqTJ8zoB1UUNihOkaDYdAs/xSk8H8QsOoGi0tZp8dBqfAdVTcWw83kaD6eCkkM5i6RJEkaN1cD+EdFBWYJ9oaN0B90dQEXjabQ7U6DQeA6lDVss6HRup/KPBRRHD2t+0sBkg1ACCIHtXm+i9OrYcOy1HNg2dnaTmY4bgjvAiHQ4XgO1EtXl+DqkVw5rQC18yJJEGZubL2rDFppBri0EszgTDqeVxY47TSJa029kwZAIc3UMy897Y0GgYeoMpdldmyAFrmHEVnZ2ltg6XS5usvm4End8SoBjvZguc73MrqjZPLM2FTICRNnNaQZAasH/ABMwoY2gCb5K02Ob2hqLAiSb2NjYey30nF0gWuL32kFx91oqF1OrJ0NOpNtMpOt1B5f2gytx7chys/0xa2HiAKdIZS112xEQbiLr0qvh4MkxOZrHkdCfuqsat1AcLtJBk5gXeb9s6LhjmCASW0u8JixyiDMaNHgNrL0SpVIBa/utLzm8ie7UaNdSOhBkA2bmQM62kRxDFfdkENw7oveKbGnLFie+RLRFpAmArDjBmlmGW9XDuJPsn/U0hmAGjzB3jMHe9Jr8NiabOKYo1XAsFGi0l1mw9uHGjtGkOdIItJndRcV4phW030+aXkPpuBhxktr0nnvWDjDD3pkhgzAmEF9mHKkEgZXM65QQ6ARoRYgWFskRoYeys/YqDjIlrXNIGxdlIgW1Jke68Ki4r2zoEu5VNxzcwbNEuAnWcw093QbWVDR7VYhuHp0GZWtYAM2UEuuCC7NImwuEGh7F13Nwgt3c7wYkx35abbh0aXvsiOzzMI2k99ZzDU51UEZnE5c7oIaDEeK8xr4h/wDt5yGkyWAkg97potDw91t/XzVFvSxJbpAt5qQ8Qf1+Srub4/BcmqiD6uMc4QSmw9fK4E7IDmJ+Ygvv5q3ofkh2cWqAQHWGlgqnmJcxBcfzir73yCDdVkyd0HzEuYijOYlzEJzEuYgL5iXMQnMT8xBV50/MQudPnQE50s6GzpZ0BOdavgbYpjyJ+RWLD1teDnuAeB+hQSvP7gJ6oMnWJOq6dO0+n9lzWbc+ZQQ1GeI0H0HRA4+mPHQbeHVH1h9B9AoMVEabDXy8EGV4gAD7Ow1J6DpCCqZps3ZujZ/CN1cY+mTJA2FwPAbqpxLL3cNG6mfwjpKyqOs4guLnWGY3dOk9Jhev8TxVKmabn1HU3sIc2q5uVmScg77iGu9ggtzS5hBGU5I8jY/LULmucHAuILTkIN7giSmdUc9z3kZnuu5xlziSblxMyVRqv4jcSo1xh20HU6gayqYYXHIXOA5ZsBAy2jbYAgI7ivbqoHGnRYwim5zmVajnT3iC4BjcpAMkQSZHmVhakwJcBraZHwbZdSJdqdeg39UMFY7GmpUpPIY0sa1jRTaQ0BjiW2cTe6kxPHsVWLnvqvJc7MSHFokzrkyjwuhbjKYA8/PbNf4Id0buJ0/rufPooC6lQkulw9rbX8Q2/VJ4BLoBPe/9tY/VC865gC5m9+vW2/RdueTqSUEuaN2i7tLm4G9/qonuHifE/v8AquAEzkA2c57W8v3Ku8EYaqbDjvlWtJ1lQZzE/MQudLOqgrmJcxC50s6ArmJ+Yhc6WdAVzEuYheYlnQFcxPzEJnT50BXMS5iFzpZ0ASSZJA8pSmSQd09R5recJHdHkfoU6SCZ5nVR1tT5n6pkkHLhLh6fQKPGWsOg+nVJJBQcT0+H0CpMTr6N/wDEJJKSqXFMDXWAvmmb7HqhQ4kGST5+YSSQdUGAloOl0nvIeQLX2sfUjVJJQMuCmSQRtUrCmSQSBcuSSUVFhPxeaOCdJa9UKUpSSVQpSlOkgUpSkkgUpSnSQKUpSSQKUpSSQf/Z"
  };

  return (
    <div className="py-16 md:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 items-center">
          
          {/* Visual Showcase */}
          <div className="relative order-2 lg:order-1">
            <div className="grid grid-cols-12 gap-3 md:gap-4">
              <div className="col-span-12 md:col-span-8">
                <div className="rounded-[1.5rem] md:rounded-[3rem] shadow-2xl overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 min-h-[300px] md:h-[500px]">
                  {!imgError['main'] ? (
                    <img 
                      src={images.main}
                      alt="Modern Architecture" 
                      className="w-full h-full object-cover"
                      onError={() => handleImageError('main')}
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-slate-800 text-white text-6xl">🏢</div>
                  )}
                </div>
              </div>
              <div className="hidden md:flex col-span-4 flex-col gap-4">
                <div className="rounded-3xl shadow-xl overflow-hidden bg-slate-100 h-[240px]">
                  <img 
                    src={images.side1}
                    alt="Office Interior" 
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="rounded-3xl shadow-xl overflow-hidden bg-slate-100 h-[240px]">
                  <img 
                    src={images.side2}
                    alt="Engineering" 
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-2 md:-bottom-10 md:-right-10 bg-slate-900 p-6 md:p-10 rounded-2xl md:rounded-[2.5rem] shadow-2xl text-white max-w-[200px] md:max-w-xs z-10 border border-white/10">
              <div className="text-2xl md:text-4xl mb-2 md:mb-4">🏗️</div>
              <h4 className="text-base md:text-xl font-bold mb-1 md:mb-2">تميز هندسي</h4>
              <p className="text-slate-400 text-[10px] md:text-sm leading-relaxed">
                نجمع بين العراقة في الخبرة والابتكار في التصميم لنخلق فضاءات استثنائية.
              </p>
            </div>
          </div>

          {/* Text Content */}
          <div className="flex flex-col gap-6 md:gap-8 order-1 lg:order-2">
            <div>
              <span className="text-sky-600 font-black tracking-widest uppercase text-xs md:text-sm mb-2 block">قصة لاين</span>
              <h2 className="text-3xl md:text-6xl font-black text-slate-900 leading-tight mb-4 md:mb-8">
                نحن نبني رؤيتكم <br/> <span className="text-sky-600">بمعايير عالمية</span>
              </h2>
              <p className="text-base md:text-xl text-slate-600 leading-relaxed mb-6 md:mb-10">
                من قلب الرياض والخرج، انطلق مكتب لاين ليكون شريككم الاستراتيجي في رحلة البناء. نحن نضمن الالتزام التام بكود البناء السعودي وأرقى المعايير الهندسية.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8">
                <div className="p-6 md:p-8 bg-slate-50 rounded-2xl md:rounded-[2rem] hover:bg-sky-50 transition-all group">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-xl md:rounded-2xl flex items-center justify-center shadow-sm mb-4 md:mb-6 group-hover:bg-sky-600 group-hover:text-white transition-all">
                    <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-lg md:text-2xl font-bold mb-2 md:mb-3">الجودة أولاً</h3>
                  <p className="text-slate-500 text-sm md:text-base">نطبق أدق معايير الفحص والإشراف لضمان سلامة وجودة كل تفصيلة في مشروعكم.</p>
                </div>

                <div className="p-6 md:p-8 bg-slate-50 rounded-2xl md:rounded-[2rem] hover:bg-sky-50 transition-all group">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-xl md:rounded-2xl flex items-center justify-center shadow-sm mb-4 md:mb-6 group-hover:bg-sky-600 group-hover:text-white transition-all">
                    <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg md:text-2xl font-bold mb-2 md:mb-3">الالتزام بالوقت</h3>
                  <p className="text-slate-500 text-sm md:text-base">نقدر قيمة وقتكم، لذا نلتزم بجداول زمنية صارمة في كافة مراحل التصميم والتراخيص.</p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default About;
