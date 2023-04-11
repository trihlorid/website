export interface Feature {
  id: number;
  title: string;
  text: string;
}

export const featuresMock: Array<Feature> = [
  {
    id: 1,
    title: 'Банк',
    text: 'Автоматизация внутрибанковских процессов, платежей и проводок для крупного российского банка',
  },
  {
    id: 2,
    title: 'Транспорт',
    text: 'Разработка и внедрение системы постоянного контроля транспорта на крупном промышленном предприятии',
  },
  {
    id: 3,
    title: 'Маркировка товаров',
    text: 'Клиентская часть системы обязательной маркировки товаров для крупного пищевого производства',
  },
  {
    id: 4,
    title: 'Криптография',
    text: 'Обеспечение бесперебойной криптографически безопасной связи сервера банка с банкоматами',
  },
];