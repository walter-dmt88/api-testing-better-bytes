# API
## API là gì ?
### Khái niệm
- Viết tắt của Application Programing Interface
- Là bộ quy tắc giúp phần mềm giao tiếp với nhau
### Lịch sử
- Ra đời vào năm 1960s
- Đến những năm 2000 khi mà web bắt đầu ptr thì từ khoá API mới bắt đầu phổ biến
### Mục đích
- Giúp các hệ thống giao tiếp độc lập với nhau ( Từng phần một giống như các phần của 1 bộ đồ chơi lắp ráp )
- Từ đó có thể phát triển độc lập và nhanh hơn

## Tại sao cần test API
- Đảm bảo dữ liệu hoạt động đúng như mong đợi
    - Kết quả trả về
    - Scheme
- Giúp phát hiện lỗi sớm
- Đảm bảo hiệu năng của sản phẩm ổn định trước nhiều kịch bản sử dụng
- Đảm bảo tính bảo mật của hệ thống

## Các hình thức API test phổ biến
- Functional testing (Kiểm thử chức năng: đảm bảo các tính năng hoạt động đúng như yêu cầu)
- Load testing ( Kiểm thử tải của hệ thống )
- Security testing (Kiểm thử tính bảo mật của hệ thống và xác định các lỗ hổng bảo mật)
- Intergration testing (Kiểm thử tích hợp các hệ thống khác với nhau và đảm bảo các hoạt động đúng yêu cầu)

## Các loại API phổ biến
- Web APIs (REST, SOAP, GraphQL)
    - REST: Sử dụng phương thức HTTP (GET, POST, PUT, DELETE)
    - SOAP: Giao thức XML (Dành cho các enterprise cần tính bảo mật)
    - GraphQL: FB phát hành năm 2012
- Library/Framework APIs (Khuôn khổ phần mềm để ptriển ưng dụng web. Cung cấp các dịch vụ web, tài nguyên và các API...)
- Operating System APIs
    - Cho phép ứng dụng tương tác với hệ điều hành
- Hardware APIs (cho phép giao tiếp với phần cứng)

### Các công cụ hỗ trợ test
- Test manual
    - cURL
    - Postman
    - InteliJ IDE
    - Jmeter
    - SOAP UI
- Test auto
    - Playwright
    - RestAssured
    - Cypress
    - Karate
    - Katalon

## XML
### Khái niệm
- Viết tắt của: eXtensible Markup Language
- Định dạng thẻ mở đóng giống html

```html
<?xml version="1.0" encoding="UTF-8"?>
<person>
    <name>Phong</name>
    <age>15</age>
    <salary>15.5</salary>
    <is_married>true</is_married>
    <how_long_to_be_rich>null</how_long_to_be_rich>
    <languages>
        <language>Java</language>
        <language>Python</language>
        <language>Javascript</language>
        <language>Go</language>
    </languages>
    <organization>
        <name>Better Bytes</name>
    </organization>
</person>
```

## JSON
### Khái niệm
- Viết tắt của: JavaScript Object Notation
- Sử dụng format Javascript Object: key-value
- Nhẹ hơn XML

```typescript
{
    "name": "Phong",
    "age": 15,
    "salary": 15.5,
    "is_married": false, // boolean
    "how_long_to_be_rich": null,
    "languages": [
        "Java",
        "Python",
        "Javascript",
        "Go"
    ],
    "organization": {
        "name": "Better Bytes"
    }
}
```
pipeline {
    agent {label "linus"}
    stage('Hello') {
        steps {
            echo "hello from Jenkinsfile"
        }
    }
}