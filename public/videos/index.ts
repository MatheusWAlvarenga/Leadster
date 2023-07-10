// type
export type VideoListType = {
  id: number
  event: string
  title: string
  file: string
  description: string
  thumbnail: string
  type: number
  createdAt: Date
}

// create random videos list
export function videoList() {
  const getRandomNumber = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min + 1)) + min

  const getRandomDate = (start: Date, end: Date) => {
    const startDate = start.getTime()
    const endDate = end.getTime()
    const randomTime = getRandomNumber(startDate, endDate)
    return new Date(randomTime)
  }

  const list = []

  for (let i = 0; i < 1000; i++) {
    const id = getRandomNumber(1000, 9999)
    const createdAt = getRandomDate(new Date('2023-01-01T00:00:00'), new Date())

    const type: number = getRandomNumber(1, 5)

    const video = {
      id,
      event: 'Webinar',
      title: 'Como aumentar sua Geração de Leads feat. Traktor',
      file: 'https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4',
      description: `Lorem ipsum dolor sit amet, consectetur adiping elit. Morbi eu cursus massa. Etiam efficitur est at dolor et sollicitudin ullamcorper at et enim. Suspendisse eleifend metus ultrices iaculis aliquam. Informações do vídeo. tipo: ${
        buttonsBarOptions.find((e) => e.id === type)?.name
      } Create_at: ${('00' + createdAt.getDate()).slice(-2)}-${(
        '00' +
        (createdAt.getMonth() + 1)
      ).slice(-2)}-${createdAt.getFullYear()} `,
      thumbnail: 'marketing.png',
      type,
      createdAt,
    }

    list.push(video)
  }

  return list
}

const buttonsBarOptions = [
  {
    id: 1,
    name: 'Agências',
    selected: false,
  },
  {
    id: 2,
    name: 'Chatbot',
    selected: false,
  },
  {
    id: 3,
    name: 'Marketing Digital',
    selected: false,
  },
  {
    id: 4,
    name: 'Geração de Leads',
    selected: true,
  },
  {
    id: 5,
    name: 'Mídia Paga',
    selected: false,
  },
]

// export const videoList: VideoListType[] = [
//   {
//     id: 1,
//     name: 'marketing.mpeg',
//     description: 'Como aumentar sua Geração de Leads feat. Traktor',
//     thumbnail: 'marketing.png',
//     type: 1,
//     createdAt: new Date('2023-01-01 00:02:01'),
//   },
//   {
//     id: 2,
//     name: 'marketing.mpeg',
//     description: 'Como aumentar sua Geração de Leads feat. Traktor',
//     thumbnail: 'marketing.png',
//     type: 1,
//     createdAt: new Date('2023-01-01 00:02:02'),
//   },
//   {
//     id: 3,
//     name: 'marketing.mpeg',
//     description: 'Como aumentar sua Geração de Leads feat. Traktor',
//     thumbnail: 'marketing.png',
//     type: 3,
//     createdAt: new Date('2023-01-01 00:02:03'),
//   },
//   {
//     id: 4,
//     name: 'marketing.mpeg',
//     description: 'Como aumentar sua Geração de Leads feat. Traktor',
//     thumbnail: 'marketing.png',
//     type: 3,
//     createdAt: new Date('2023-01-01 00:02:04'),
//   },
//   {
//     id: 5,
//     name: 'marketing.mpeg',
//     description: 'Como aumentar sua Geração de Leads feat. Traktor',
//     thumbnail: 'marketing.png',
//     type: 3,
//     createdAt: new Date('2023-01-01 00:02:01'),
//   },
//   {
//     id: 6,
//     name: 'marketing.mpeg',
//     description: 'Como aumentar sua Geração de Leads feat. Traktor',
//     thumbnail: 'marketing.png',
//     type: 3,
//     createdAt: new Date('2023-01-01 00:02:01'),
//   },
//   {
//     id: 7,
//     name: 'marketing.mpeg',
//     description: 'Como aumentar sua Geração de Leads feat. Traktor',
//     thumbnail: 'marketing.png',
//     type: 3,
//     createdAt: new Date('2023-01-01 00:02:05'),
//   },
//   {
//     id: 8,
//     name: 'marketing.mpeg',
//     description: 'Como aumentar sua Geração de Leads feat. Traktor',
//     thumbnail: 'marketing.png',
//     type: 3,
//     createdAt: new Date('2023-01-01 00:02:01'),
//   },
//   {
//     id: 9,
//     name: 'marketing.mpeg',
//     description: 'Como aumentar sua Geração de Leads feat. Traktor',
//     thumbnail: 'marketing.png',
//     type: 4,
//     createdAt: new Date('2023-01-01 00:02:07'),
//   },
//   {
//     id: 10,
//     name: 'marketing.mpeg',
//     description: 'Como aumentar sua Geração de Leads feat. Traktor',
//     thumbnail: 'marketing.png',
//     type: 4,
//     createdAt: new Date('2023-01-01 00:02:01'),
//   },
//   {
//     id: 11,
//     name: 'marketing.mpeg',
//     description: 'Como aumentar sua Geração de Leads feat. Traktor',
//     thumbnail: 'marketing.png',
//     type: 4,
//     createdAt: new Date('2023-01-01 00:02:01'),
//   },
//   {
//     id: 12,
//     name: 'marketing.mpeg',
//     description: 'Como aumentar sua Geração de Leads feat. Traktor',
//     thumbnail: 'marketing.png',
//     type: 4,
//     createdAt: new Date('2023-01-01 00:02:09'),
//   },
//   {
//     id: 13,
//     name: 'marketing.mpeg',
//     description: 'Como aumentar sua Geração de Leads feat. Traktor',
//     thumbnail: 'marketing.png',
//     type: 4,
//     createdAt: new Date('2023-01-01 00:02:01'),
//   },
//   {
//     id: 14,
//     name: 'marketing.mpeg',
//     description: 'Como aumentar sua Geração de Leads feat. Traktor',
//     thumbnail: 'marketing.png',
//     type: 4,
//     createdAt: new Date('2023-01-01 00:02:01'),
//   },
//   {
//     id: 15,
//     name: 'marketing.mpeg',
//     description: 'Como aumentar sua Geração de Leads feat. Traktor',
//     thumbnail: 'marketing.png',
//     type: 4,
//     createdAt: new Date('2023-01-01 00:02:01'),
//   },
//   {
//     id: 16,
//     name: 'marketing.mpeg',
//     description: 'Como aumentar sua Geração de Leads feat. Traktor',
//     thumbnail: 'marketing.png',
//     type: 4,
//     createdAt: new Date('2023-01-01 00:02:10'),
//   },
//   {
//     id: 17,
//     name: 'marketing.mpeg',
//     description: 'Como aumentar sua Geração de Leads feat. Traktor',
//     thumbnail: 'marketing.png',
//     type: 4,
//     createdAt: new Date('2023-01-01 00:03:01'),
//   },
//   {
//     id: 18,
//     name: 'marketing.mpeg',
//     description: 'Como aumentar sua Geração de Leads feat. Traktor',
//     thumbnail: 'marketing.png',
//     type: 4,
//     createdAt: new Date('2023-01-01 00:02:11'),
//   },
//   {
//     id: 19,
//     name: 'marketing.mpeg',
//     description: 'Como aumentar sua Geração de Leads feat. Traktor',
//     thumbnail: 'marketing.png',
//     type: 1,
//     createdAt: new Date('2023-01-01 00:02:01'),
//   },
//   {
//     id: 20,
//     name: 'marketing.mpeg',
//     description: 'Como aumentar sua Geração de Leads feat. Traktor',
//     thumbnail: 'marketing.png',
//     type: 2,
//     createdAt: new Date('2023-01-01 01:02:01'),
//   },
//   {
//     id: 21,
//     name: 'marketing.mpeg',
//     description: 'Como aumentar sua Geração de Leads feat. Traktor',
//     thumbnail: 'marketing.png',
//     type: 1,
//     createdAt: new Date('2023-01-04 00:02:01'),
//   },
//   {
//     id: 22,
//     name: 'marketing.mpeg',
//     description: 'Como aumentar sua Geração de Leads feat. Traktor',
//     thumbnail: 'marketing.png',
//     type: 1,
//     createdAt: new Date('2023-01-02 00:02:01'),
//   },
//   {
//     id: 23,
//     name: 'marketing.mpeg',
//     description: 'Como aumentar sua Geração de Leads feat. Traktor',
//     thumbnail: 'marketing.png',
//     type: 1,
//     createdAt: new Date('2023-01-01 00:02:01'),
//   },
//   {
//     id: 24,
//     name: 'marketing.mpeg',
//     description: 'Como aumentar sua Geração de Leads feat. Traktor',
//     thumbnail: 'marketing.png',
//     type: 5,
//     createdAt: new Date('2023-01-04 20:02:01'),
//   },
//   {
//     id: 25,
//     name: 'marketing.mpeg',
//     description: 'Como aumentar sua Geração de Leads feat. Traktor',
//     thumbnail: 'marketing.png',
//     type: 5,
//     createdAt: new Date('2023-01-01 21:02:01'),
//   },
//   {
//     id: 26,
//     name: 'marketing.mpeg',
//     description: 'Como aumentar sua Geração de Leads feat. Traktor',
//     thumbnail: 'marketing.png',
//     type: 5,
//     createdAt: new Date('2023-01-01 00:02:01'),
//   },
//   {
//     id: 27,
//     name: 'marketing.mpeg',
//     description: 'Como aumentar sua Geração de Leads feat. Traktor',
//     thumbnail: 'marketing.png',
//     type: 5,
//     createdAt: new Date('2023-01-01 00:02:01'),
//   },
//   {
//     id: 28,
//     name: 'marketing.mpeg',
//     description: 'Como aumentar sua Geração de Leads feat. Traktor',
//     thumbnail: 'marketing.png',
//     type: 5,
//     createdAt: new Date('2023-01-01 00:02:01'),
//   },
// ]
