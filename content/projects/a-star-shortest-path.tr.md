Bu proje, iki nokta arasındaki en kısa yolu bulmak için kullanılan **A\*** arama algoritmasını ızgara tabanlı bir haritada görselleştirir.

## Öne Çıkan Özellikler

- Fare ile engel çizme ve silme
- Başlangıç ve hedef noktalarını anlık taşıma
- Açık küme, kapalı küme ve bulunan en kısa yolun adım adım gösterimi

## Maliyet Fonksiyonu

Her düğüm için toplam tahmin şu formülle hesaplanır:

```text
f(n) = g(n) + h(n)
```

Burada `g(n)` başlangıçtan mevcut düğüme kadar olan gerçek maliyeti, `h(n)` ise hedefe kalan tahmini mesafeyi temsil eder.

