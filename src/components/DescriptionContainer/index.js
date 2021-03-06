import React from "react";
import { TextWrapper } from "./styled";
const DescriptionContainer = () => {
  return (
    <TextWrapper>
      <h3>Tentang Peta Mobilitas Masyarakat dan Kasus COVID-19 Indonesia</h3>
      <p>
        Peta ini mendapatkan pendanaan dari Konsorsium Riset dan Inovasi
        COVID-19 Tahap 2 Kemenristek/BRIN dengan judul proposal “Evaluasi
        Pergerakan, Perilaku, dan Penerapan Aturan dalam Pelaksanaan PSBB
        (Pembatasan Sosial Berskala Besar) berbasis Maha Data Geospasial: Peta
        Skoring PSBB Indonesia” yang diketuai oleh Prof. Dr. dr. Budi Wiweko,
        Sp.OG(K), MPH. Untuk informasi lebih lanjut dapat menghubungi Wakil
        Ketua / Koordinator Tim Sinergi Mahadata UI: dr Damar Susilaradeya, PhD.
        (damar.p@ui.ac.id).
      </p>
      <h5>Tujuan</h5>
      <p>
        Peta ini bertujuan untuk menilai indeks mobilitas masyarakat baik serta
        penambahan kasus harian COVID-19 di daerah yang memberlakukan PSBB
        maupun tidak serta melakukan pemetaan geospasial secara semi real-time.
      </p>
      <h5>Manfaat</h5>
      <p>
        <ul>
          <li>
            Menjadi masukan untuk pemerintah pusat maupun daerah dalam membuat
            kebijakan terkait PSBB dan pengendalian mobilitas masyarakat
          </li>
          <li>
            Menjadi sumber data dalam mengevaluasi strategi physical distancing
            dalam menurunkan kasus COVID-19.
          </li>
        </ul>
      </p>
      <h5>Jenis Data</h5>
      <p>
        <ol>
          <li>
            <b>Perubahan mobilitas</b> <br></br> Perubahan mobilitas (travel
            range) menunjukan nilai rerata jumlah Bing tiles level 16 (ukuran
            0,6 km x 0,6 km) yang dilalui pengguna Facebook dalam periode 24 jam
            dibandingkan dengan bulan Februari sebelum pandemi.
          </li>
          <li>
            <b>Kepatuhan untuk di rumah saja</b> <br></br> Kepatuhan untuk di
            rumah saja (percentage of people staying put) menunjukan persentase
            pengguna Facebook yang tidak bergerak keluar dari satu Bing tile
            level 16 (ukuran 0,6 km x 0,6 km) pada setidaknya 3 jam yang berbeda
            dalam satu hari.
          </li>
        </ol>
        Data mobilitas diperoleh dari{" "}
        <a href="https://dataforgood.fb.com/">Facebook Data for Good.</a>
      </p>
      <h5>Tingkat Agregasi</h5>
      <p>
        <ol>
          <li>
            <b>Kota/Kabupaten</b> <br></br> Pada tingkai kota/kabupaten dapat
            dilihat data mobilitas yang didapatkan dari{" "}
            <a href="https://dataforgood.fb.com/">Facebook Data for Good.</a>.
          </li>
          <li>
            <b>Provinsi</b> <br></br>Pada tingkat agregasi provinsi dapat
            dilihat penambahan kasus harian COVID-19 dan data mobilitas. Data
            mobilitas pada tingkat provinsi didapatkan dengan menghitung nilai
            rerata mobilitas kota/kabupaten. Data penambahan kasus harian
            diambil dari KawalCovid.
          </li>
        </ol>
      </p>
      <h5>Privasi</h5>
      <p>
        Data mobilitas{" "}
        <a href="https://dataforgood.fb.com/">Facebook Data for Good.</a>{" "}
        didapatkan dari pengguna aplikasi Facebook yang memberikan consent untuk
        dicatat riwayat lokasinya. Data ini kemudian diagregasi secara anonimus
        sehingga individu yang membagi datanya tidak bisa ditelusuri. Selain itu
        pada data yang diagregasi juga dilakukan spatial smoothing dan
        penambahan random noise, untuk menjaga kerahasiaan data.
      </p>
      <h5>Pemberlakuan PSBB</h5>
      <p>
        PSBB tercatat diberlakukan di 4 Provinsi, 15 Kota dan 11 Kabupaten.
        <ul>
          <li>
            <b>4 Provinsi:</b> Sumatera Barat, DKI Jakarta, Jawa Barat,
            Gorontalo
          </li>
          <li>
            <b>15 Kota:</b> Tangerang, Tangerang Selatan, Pekanbaru, Makassar,
            Tegal, Banjarmasin, Tarakan, Surabaya, Palangkaraya, Malang, Batu,
            Banjarbaru, Palembang, Prabumulih, Dumai.
          </li>
          <li>
            <b>11 Kabupaten:</b> Tangerang, Sidoarjo, Gresik, Buoi, Malang,
            Banjar, Barito Kuala, Kampar, Pelalawan, Siak, Bengkalis.
          </li>
        </ul>
      </p>
      <h5>Tim Pengembang</h5>
      <p>
        Favian Kharisma Hazman, Muhamad Istiady Kartadibrata, Ray Azrin Karim,
        Adila Krisnadhi (FASILKOM UI), Satria Indratmoko, Ardiansyah, Jarot
        Mulyo Semedi (FMIPA UI), Iwan Ariawan (FKM UI), Arya Ananda Lukmana, Aly
        Lamuri, Diashati Mardiasmo, Arierta Pujitresnani, Anindya Pradipta
        Susanto, Prasandhya Astagiri Yusuf, Damar Susilaradeya, Budi Wiweko (FK
        UI)
      </p>
    </TextWrapper>
  );
};

export default DescriptionContainer;
