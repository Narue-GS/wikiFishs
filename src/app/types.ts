export interface IFish {
  id: number,
  name: string,
  s_name: string,
  score: number,
  desc:string,
}

export const deafultModalState = {
  display:false,
  data:{id: -1, name: '',s_name: '',
    score: 0,
    desc: '',
  }
}