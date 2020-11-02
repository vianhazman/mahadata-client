import React from "react";
import { TextWrapper } from "./styled";
const DescriptionContainer = () => {
  return (
    <TextWrapper>
      <h3>Tentang Peta Pergerakan Masyarakat dan Kasus COVID-19 Indonesia</h3>
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
        Peta ini bertujuan untuk menilai indeks pergerakan masyarakat baik serta
        penambahan kasus harian COVID-19 di daerah yang memberlakukan PSBB
        maupun tidak serta melakukan pemetaan geospasial secara semi real-time.
      </p>
      <h5>Manfaat</h5>
      <p>
        <ul>
          <li>
            Menjadi masukan untuk pemerintah pusat maupun daerah dalam membuat
            kebijakan terkait PSBB dan pengendalian pergerakan masyarakat
          </li>
          <li>
            Menjadi sumber data dalam mengevaluasi strategi physical distancing
            dalam menurunkan kasus COVID-19.
          </li>
        </ul>
      </p>
      <h5>Jenis Data Pergerakan</h5>
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
        Data pergerakan diperoleh dari Facebook Data for Good.
      </p>
      <h5>Tingkat Agregasi</h5>
      <p>
        <ol>
          <li>
            <b>Kota/Kabupaten</b> <br></br> Pada tingkai kota/kabupaten dapat
            dilihat data pergerakan yang didapatkan dari Facebook Data for Good.
          </li>
          <li>
            <b>Provinsi</b> <br></br>Pada tingkat agregasi provinsi dapat
            dilihat penambahan kasus harian COVID-19 dan data pergerakan. Data
            pergerakan pada tingkat provinsi didapatkan dengan menghitung nilai
            rerata pergerakan kota/kabupaten.
          </li>
        </ol>
      </p>
      <h5>Privasi</h5>
      <p>
        Data pergerakan Facebook Data for Good didapatkan dari pengguna aplikasi
        Facebook yang memberikan consent untuk dicatat riwayat lokasinya. Data
        ini kemudian diagregasi secara anonimus sehingga individu yang membagi
        datanya tidak bisa ditelusuri. Selain itu pada data yang diagregasi juga
        dilakukan spatial smoothing dan penambahan random noise, untuk menjaga
        kerahasiaan data.
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
    </TextWrapper>
  );
};

export default DescriptionContainer;
