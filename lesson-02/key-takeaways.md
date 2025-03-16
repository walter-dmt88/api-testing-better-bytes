# REST API
## Mô hình client và server
- Client và server giao tiếp với nhau thông qua API
- Client sẽ gửi đi 1 yêu cầu (API request) đến server
- Server sẽ tiến hành xử lý yếu cầu đó và trả về cho client thông qua API response

## Thanh phần của request 
- 1 request sẽ bao gồm:
    - Method
    - URL (Base URL + endpoint)
    - Header
    - Body

## Thanh phần của response  
- 1 response sẽ bao gồm:
    - Status code
    - Header
    - Body

## Tại sao phải tách thành nhiều thành phần?
- Giúp việc gửi nhận dữ liệu hiệu quả hơn
- Các thành phần có từng vai trò cụ thể khiến client và server hiểu chính xác yêu cầu
- Dễ dàng tái siwr dụng và tuỷ chỉnh từng phần mà không làm rối toàn bộ request

## Request
### Method 
- HTTP Method (hay HTTP Verb) là phương thức định nghĩa trong giao thức HTTP để chỉ ra hành động mà client muốn thực hiện với tài nguyên trên server.
- Các method phổ biến: GET, POST, PUT, PATCH, DELETE, HEAD, OPTION

### URL
- URL (Uniform Resource Locator) là đường dẫn tới resource
- URL gồm:
    - Scheme: http/https
    - domain: Tên miền 
    - path: đường dẫn tới dữ liệu trong resource
    - query: các thông tin bổ sung cho dữ liệu: có định dạng key-valye, key đầu tiên bắt đầu từ dấu `?`, từ key thứ 2 bắt đầu bằng `&`
    - fragment: một vị trí neo trên trag web, không có tác dụng khi gửi lên server

### Header
- Header: là dữ liệu đi đầu trong mỗi request
- Là các cặp key-value trong request HTTP để truyền tải thông tin bổ sung giữa client và server.
- Các nhóm header:
    - Authorization headers: dùng cho việc xác thực: 
        - Authorization có 2 kiểu: Basic token và Bearer token
        - WWW-Authenticate: xác thực phân quyền, cần phải chỉ ra phương thức xác thực và được chấp thuận
        - VD: WWW-Authenticate: Basic realm='Access to staging site'
    - Content headers: Khai báo kiẻu dữ liệu mà client gửi lên: Content-type: application/json
    - Caching headers: Liên quan đến bộ nhớ đệm
        - Cache control
            - Control toàn bộ hệ thống caching
            - Các giá trị phổ biến: `no-cache, no-store, max-age=<seconds>`
        - ETag
            - Định danh version của resource
    - Security headers: các header như `Strci-Transport-Sec, X-XSS-Protection, X-Frame-Options`: là các header liên quan đến bảo mật
    - CORS headers; Liên quan đến việc chia sẻ dữ liệu khác nhau giữa các domain: cho phép truy cập, các method nào được dùng...

### Body
- Body là dữ liệu được gửi đi trong một request API.
- Sử dụng khi chúng ta cần truyền thông tin đến server, chẳng hạn:
    - Đăng ký người dùng mới.
    - Cập nhật thông tin sản phẩm.
    - Tìm kiếm dữ liệu với các tiêu chí phức tạp.
- Dữ liệu trong request body thường được gửi dưới định dạng JSON, XML, hoặc Form-Data.

## Response
### Status code
- Status code: giúp client hiểu được kết quả của request gửi đến server.
- Status code là một số gồm 3 chữ số, được chia thành 5 nhóm chính.
    - 1xx: nhóm thông tin cho biết request đã được server tiếp nhận xử lý
    - 2xx: success: request đã được xử lý thành công
        - 200 OK
        - 201 Created: Tạo mới resouce thành công
        - 204 No Content: request thành công nhưng không có data trả về
    - 3xx: Redirection
        - 301 moved permanetly: Resouce đã được chuyển tới URL mới vĩnh viễn
        - 302 Found: Resouce tạm thời chuyển đến URL khác
        - 304 Not Modified: Resource không thay đổi so với bản cache của client