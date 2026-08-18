# SmartCampus – Phiếu thực hành Chương 2 (Core Primitives & Interaction)

Màn hình hồ sơ sinh viên, tái hiện theo wireframe SmartCampus (avatar, ô tìm
kiếm, thẻ thông tin, nút lưu, 3 trạng thái Pressable).

## Component đã tách

| Component | Vai trò | Core primitives dùng |
|---|---|---|
| `Header` | Thanh tiêu đề trên cùng | `View`, `Text`, `Image` |
| `Avatar` | Ảnh đại diện sinh viên, kích thước cố định | `Image` |
| `SearchField` | Ô tìm kiếm có kiểm soát (controlled) | `TextInput` |
| `InfoRow` | Một dòng "Nhãn: Giá trị" | `View`, `Text` |
| `InfoCard` | Thẻ thông tin sinh viên, bọc nhiều `InfoRow` | `View`, `Text` |
| `ActionButton` | Nút hành động 3 trạng thái (bình thường / đang nhấn / vô hiệu) | `Pressable`, `Text` |
| `App` | Lắp ráp toàn bộ màn hình, chống tràn bằng `ScrollView` | `SafeAreaView`, `ScrollView`, `View` |

## Tương tác (Interaction)

- **LƯU HỒ SƠ**: nút chính (primary), luôn bật trừ khi đang lưu (giả lập
  700ms) → minh họa trạng thái vô hiệu hóa tạm thời.
- **XÓA TÌM KIẾM**: nút phụ (secondary), tự động vô hiệu hóa khi ô tìm kiếm
  đang trống — minh họa trạng thái vô hiệu hóa theo điều kiện.
- Phản hồi khi nhấn: nút co nhẹ (`scale: 0.97`) + đổi viền + gạch chân chữ,
  không chỉ dựa vào màu nền.
- Vùng chạm: `minHeight`/`minWidth` 48, cộng thêm `hitSlop` 6px mỗi cạnh.
- Accessibility: mỗi `ActionButton` có `accessibilityRole="button"`,
  `accessibilityLabel` mô tả đúng hành động, `accessibilityHint` giải thích
  kết quả, và `accessibilityState={{ disabled }}` phản ánh đúng trạng thái.

## Cách chạy

```bash
npm install
npx expo start
```

Sau đó quét mã QR bằng Expo Go (Android/iOS) hoặc nhấn `w` để chạy bản web.

## Cấu trúc thư mục

```
smartcampus/
├── App.tsx
├── components/
│   ├── Header.tsx
│   ├── Avatar.tsx
│   ├── SearchField.tsx
│   ├── InfoRow.tsx
│   ├── InfoCard.tsx
│   └── ActionButton.tsx
├── assets/
│   ├── avatar.png
│   └── logo.png
└── package.json
```
