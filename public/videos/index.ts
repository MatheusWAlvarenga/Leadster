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

// create random videos list test
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
      title: generateRandomText(),
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

function generateRandomText() {
  const loremText =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique elit id vestibulum condimentum. Phasellus et malesuada odio.'
  const minLength = 30
  const maxLength = 45
  const textLength =
    Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength
  let randomText = ''

  while (randomText.length < textLength) {
    randomText += loremText
  }

  return randomText.substring(0, textLength)
}
