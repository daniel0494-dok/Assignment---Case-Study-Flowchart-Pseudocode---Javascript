# Laporan Pengetesan Fungsi `hitungCheckout`

Dokumen ini berisi rangkuman dan evaluasi hasil pengujian (*unit testing*) fungsi `hitungCheckout` berdasarkan berbagai skenario input.

---

## 1. Rangkuman Hasil Pengujian

| No | Skenario Pengujian | Input (`price`, `quantity`, `member`) | Ekspektasi Output | Hasil Aktual (Terminal) | Status |
|---|---|---|---|---|---|
| **1** | Pengujian Member | `(4000, 26, true)` | `subTotal`: 104.000<br>`discount`: 10.400<br>`shippingCost`: 15.000<br>`totalPayment`: 108.600 | `total`: 104000<br>`discount`: 10400<br>`shippingCost`: 15000<br>`totalPayment`: 108600 | **PASSED** |
| **2** | Pengujian Non-Member | `(4000, 26, false)` | `subTotal`: 104.000<br>`discount`: 0<br>`shippingCost`: 15.000<br>`totalPayment`: 119.000 | `total`: 104000<br>`discount`: 0<br>`shippingCost`: 15000<br>`totalPayment`: 119000 | **PASSED** |
| **3** | Total Dibawah Rp250.000 | `(3000, 20, true)` | `subTotal`: 60.000<br>`discount`: 6.000<br>`shippingCost`: 15.000<br>`totalPayment`: 69.000 | `total`: 60000<br>`discount`: 6000<br>`shippingCost`: 15000<br>`totalPayment`: 69000 | **PASSED** |
| **4** | Total Diatas Rp250.000 | `(4000, 82, true)` | `subTotal`: 328.000<br>`discount`: 32.800<br>`shippingCost`: 0<br>`totalPayment`: 295.200 | `total`: 328000<br>`discount`: 32800<br>`shippingCost`: 0<br>`totalPayment`: 295200 | **PASSED** |
| **5** | Total Tepat Rp250.000 | `(5000, 50, true)` | `subTotal`: 250.000<br>`discount`: 25.000<br>`shippingCost`: 15.000<br>`totalPayment`: 240.000 | `shippingCost`: 15000<br>`totalPayment`: 240000 | **PASSED** |
| **6** | Validasi Harga Desimal | `(4000.5, 25, true)` | `"input not valid"` | `"input not valid"` | **PASSED** |
| **7** | Validasi Jumlah `0` | `(3000, 0, true)` | `"input not valid"` | `"input not valid"` | **PASSED** |
| **8** | Validasi Jumlah Pecahan | `(4000, 2.5, true)` | `"input not valid"` | `"input not valid"` | **PASSED** |

---

## 3. Kesimpulan

Semua pengujian (100% dari 8 skenario pengujian) telah **BERHASIL (PASSED)**. Logika penanganan diskon, pengondisian ongkir, serta validasi *guard clause* terhadap input tak valid telah berjalan secara akurat sesuai dengan kode program pada `checkout.js`.
