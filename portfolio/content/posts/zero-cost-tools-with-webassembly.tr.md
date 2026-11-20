Küçük bir araç ya da algoritma demosu yayınlamak için her seferinde bir sunucu kiralamak çoğu zaman gereksiz maliyet ve bakım yükü getirir.

## Neden İstemci Tarafı?

Modern tarayıcılar yalnızca sayfa göstermek için değil, ciddi hesaplamalar yapmak için de yeterince güçlü:

- **Sıfır sunucu maliyeti:** Statik dosyalar GitHub Pages üzerinde ücretsiz barındırılır.
- **Düşük gecikme:** Veri sunucuya gidip gelmediği için etkileşim anlıktır.
- **Gizlilik:** Kullanıcının yüklediği görseller veya dosyalar cihazından dışarı çıkmaz.

## Basit Bir Örnek

C++ ile yazılmış bir fonksiyonu WebAssembly olarak derleyip doğrudan JavaScript içinden çağırabilirsin:

```cpp
int heuristic(int ax, int ay, int bx, int by) {
  return abs(ax - bx) + abs(ay - by);
}
```

> Sunucu yönetmekle uğraşmadan fikri doğrudan çalışan bir sayfaya dönüştürmek, üretme hızını belirgin şekilde artırıyor.

