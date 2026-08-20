// DONE — product catalogue
// 26 models across 5 series. Images: src/assets/products/done/

import imgDl30WV5Edc from '../assets/products/done/dl-30w-v5-edc.webp'
import imgDl60WV5Edc from '../assets/products/done/dl-60w-v5-edc.webp'
import imgDl120WV24MEdc from '../assets/products/done/dl-120w-v24m-edc.webp'
import imgDl150WV12Edc from '../assets/products/done/dl-150w-v12-edc.webp'
import imgDl150WV24MEdc from '../assets/products/done/dl-150w-v24m-edc.webp'
import imgExc25W from '../assets/products/done/exc-25w.webp'
import imgExc25WV24Exc from '../assets/products/done/exc-25w-v24-exc.webp'
import imgDl100WV24Exc from '../assets/products/done/dl-100w-v24-exc.webp'
import imgDl350WV15BExc from '../assets/products/done/dl-350w-v15b-exc.webp'
import imgDl600WV24Exc from '../assets/products/done/dl-600w-v24-exc.webp'
import imgExc35H from '../assets/products/done/exc-35h.webp'
import imgExc35HV12Exc from '../assets/products/done/exc-35h-v12-exc.webp'
import imgDl50HV15Exc from '../assets/products/done/dl-50h-v15-exc.webp'
import imgDl75HV12Exc from '../assets/products/done/dl-75h-v12-exc.webp'
import imgDl100HV12Exc from '../assets/products/done/dl-100h-v12-exc.webp'
import imgDl150HV12Exc from '../assets/products/done/dl-150h-v12-exc.webp'
import imgDl150HV24Exc from '../assets/products/done/dl-150h-v24-exc.webp'
import imgDl200HV12Exc from '../assets/products/done/dl-200h-v12-exc.webp'
import imgDl350HV24Exc from '../assets/products/done/dl-350h-v24-exc.webp'
import imgDl450HV12Exc from '../assets/products/done/dl-450h-v12-exc.webp'
import imgDl450HV24Exc from '../assets/products/done/dl-450h-v24-exc.webp'
import imgDl600HV24Exc from '../assets/products/done/dl-600h-v24-exc.webp'
import imgDl50WV24Exl from '../assets/products/done/dl-50w-v24-exl.webp'
import imgDl150WV24Exl from '../assets/products/done/dl-150w-v24-exl.webp'
import imgDl300WV24Exl from '../assets/products/done/dl-300w-v24-exl.webp'
import imgDl500WV24Exs from '../assets/products/done/dl-500w-v24-exs.webp'
import img001 from '../assets/products/done/dl-30w-v5-edc.webp'

export const DONE_SERIES = [
  { code: 'EDC', name: 'EDC Series', count: 5, description: '' },
  { code: 'EXC', name: 'EXC Series', count: 5, description: '' },
  { code: 'EXC-H', name: 'EXC-H Series', count: 12, description: '' },
  { code: 'EXL', name: 'EXL Series', count: 3, description: '' },
  { code: 'EXS', name: 'EXS Series', count: 1, description: '' },
]

export const DONE_PRODUCTS = [
  {
    name: 'DL-30W-V5-EDC',
    slug: 'dl-30w-v5-edc',
    series: 'EDC',
    range: '30W / 5V DC',
    watts: 30,
    volts: 5,
    image: imgDl30WV5Edc,
    description: '',
  },
  {
    name: 'DL-60W-V5-EDC',
    slug: 'dl-60w-v5-edc',
    series: 'EDC',
    range: '60W / 5V DC',
    watts: 60,
    volts: 5,
    image: imgDl60WV5Edc,
    description: '',
  },
  {
    name: 'DL-120W-V24M-EDC',
    slug: 'dl-120w-v24m-edc',
    series: 'EDC',
    range: '120W / 24V DC',
    watts: 120,
    volts: 24,
    image: imgDl120WV24MEdc,
    description: '',
  },
  {
    name: 'DL-150W-V12-EDC',
    slug: 'dl-150w-v12-edc',
    series: 'EDC',
    range: '150W / 12V DC',
    watts: 150,
    volts: 12,
    image: imgDl150WV12Edc,
    description: '',
  },
  {
    name: 'DL-150W-V24M-EDC',
    slug: 'dl-150w-v24m-edc',
    series: 'EDC',
    range: '150W / 24V DC',
    watts: 150,
    volts: 24,
    image: imgDl150WV24MEdc,
    description: '',
  },
  {
    name: 'EXC-25W',
    slug: 'exc-25w',
    series: 'EXC',
    range: '25W',
    watts: 25,
    image: imgExc25W,
    description: '',
  },
  {
    name: 'EXC-25W-V24-EXC',
    slug: 'exc-25w-v24-exc',
    series: 'EXC',
    range: '25W / 24V DC',
    watts: 25,
    volts: 24,
    image: imgExc25WV24Exc,
    description: '',
  },
  {
    name: 'DL-100W-V24-EXC',
    slug: 'dl-100w-v24-exc',
    series: 'EXC',
    range: '100W / 24V DC',
    watts: 100,
    volts: 24,
    image: imgDl100WV24Exc,
    description: '',
  },
  {
    name: 'DL-350W-V15B-EXC',
    slug: 'dl-350w-v15b-exc',
    series: 'EXC',
    range: '350W / 15V DC',
    watts: 350,
    volts: 15,
    image: imgDl350WV15BExc,
    description: '',
  },
  {
    name: 'DL-600W-V24-EXC',
    slug: 'dl-600w-v24-exc',
    series: 'EXC',
    range: '600W / 24V DC',
    watts: 600,
    volts: 24,
    image: imgDl600WV24Exc,
    description: '',
  },
  {
    name: 'EXC-35H',
    slug: 'exc-35h',
    series: 'EXC-H',
    range: '35W',
    watts: 35,
    image: imgExc35H,
    description: '',
  },
  {
    name: 'EXC-35H-V12-EXC',
    slug: 'exc-35h-v12-exc',
    series: 'EXC-H',
    range: '35W / 12V DC',
    watts: 35,
    volts: 12,
    image: imgExc35HV12Exc,
    description: '',
  },
  {
    name: 'DL-50H-V15-EXC',
    slug: 'dl-50h-v15-exc',
    series: 'EXC-H',
    range: '50W / 15V DC',
    watts: 50,
    volts: 15,
    image: imgDl50HV15Exc,
    description: '',
  },
  {
    name: 'DL-75H-V12-EXC',
    slug: 'dl-75h-v12-exc',
    series: 'EXC-H',
    range: '75W / 12V DC',
    watts: 75,
    volts: 12,
    image: imgDl75HV12Exc,
    description: '',
  },
  {
    name: 'DL-100H-V12-EXC',
    slug: 'dl-100h-v12-exc',
    series: 'EXC-H',
    range: '100W / 12V DC',
    watts: 100,
    volts: 12,
    image: imgDl100HV12Exc,
    description: '',
  },
  {
    name: 'DL-150H-V12-EXC',
    slug: 'dl-150h-v12-exc',
    series: 'EXC-H',
    range: '150W / 12V DC',
    watts: 150,
    volts: 12,
    image: imgDl150HV12Exc,
    description: '',
  },
  {
    name: 'DL-150H-V24-EXC',
    slug: 'dl-150h-v24-exc',
    series: 'EXC-H',
    range: '150W / 24V DC',
    watts: 150,
    volts: 24,
    image: imgDl150HV24Exc,
    description: '',
  },
  {
    name: 'DL-200H-V12-EXC',
    slug: 'dl-200h-v12-exc',
    series: 'EXC-H',
    range: '200W / 12V DC',
    watts: 200,
    volts: 12,
    image: imgDl200HV12Exc,
    description: '',
  },
  {
    name: 'DL-350H-V24-EXC',
    slug: 'dl-350h-v24-exc',
    series: 'EXC-H',
    range: '350W / 24V DC',
    watts: 350,
    volts: 24,
    image: imgDl350HV24Exc,
    description: '',
  },
  {
    name: 'DL-450H-V12-EXC',
    slug: 'dl-450h-v12-exc',
    series: 'EXC-H',
    range: '450W / 12V DC',
    watts: 450,
    volts: 12,
    image: imgDl450HV12Exc,
    description: '',
  },
  {
    name: 'DL-450H-V24-EXC',
    slug: 'dl-450h-v24-exc',
    series: 'EXC-H',
    range: '450W / 24V DC',
    watts: 450,
    volts: 24,
    image: imgDl450HV24Exc,
    description: '',
  },
  {
    name: 'DL-600H-V24-EXC',
    slug: 'dl-600h-v24-exc',
    series: 'EXC-H',
    range: '600W / 24V DC',
    watts: 600,
    volts: 24,
    image: imgDl600HV24Exc,
    description: '',
  },
  {
    name: 'DL-50W-V24-EXL',
    slug: 'dl-50w-v24-exl',
    series: 'EXL',
    range: '50W / 24V DC',
    watts: 50,
    volts: 24,
    image: imgDl50WV24Exl,
    description: '',
  },
  {
    name: 'DL-150W-V24-EXL',
    slug: 'dl-150w-v24-exl',
    series: 'EXL',
    range: '150W / 24V DC',
    watts: 150,
    volts: 24,
    image: imgDl150WV24Exl,
    description: '',
  },
  {
    name: 'DL-300W-V24-EXL',
    slug: 'dl-300w-v24-exl',
    series: 'EXL',
    range: '300W / 24V DC',
    watts: 300,
    volts: 24,
    image: imgDl300WV24Exl,
    description: '',
  },
  {
    name: 'DL-500W-V24-EXS',
    slug: 'dl-500w-v24-exs',
    series: 'EXS',
    range: '500W / 24V DC',
    watts: 500,
    volts: 24,
    image: imgDl500WV24Exs,
    description: '',
  },
]

export default DONE_PRODUCTS
