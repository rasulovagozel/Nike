import React from 'react'
import Card from './Card'
import "./cards.scss"
const Cards = () => {
  var Element=[
  {
    HeadText:"Nike Air Max Pulse",
    about:"Women's Shoes",
    price:"₹ 13 995",
    image: "https://s3-alpha-sig.figma.com/img/4ec2/087c/e89e298eedea3b5b3ff13b986994a8d4?Expires=1692576000&Signature=Ls0wAxgOWqJfopxVvPVSlSUkhpi-15ULcBFQXdPXHLyom~YlnyfHRdf2K~jCpZVCF7INoD4JL0wRzVlHTy81JodXeIrurnPia9pqKrEB5Omjidg8MYDHIQgl6ETq6vn5zbbVI8EV64R4auw0zTYw2jQcsQrFQatwQzPQ5kZcjTT71Ox9aZIEXQjKgzgdrAGYPP8EJjYny8e9Nbi-BhOe9USAN61U~yhSBzOwBUyiRu5TABkbwtVD339nGVdvJebMP27VgslsFyZ6msuCNwo0c3pbLgZpS8zV2Xqe5grP9fIFsBFuhZCkyj9bCjFbZkT4rzJFUH73kuH9igahBU1L4A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
  },
  {
    HeadText:"Nike Air Max Pulse",
    about:"Men's Shoes",
    price:"₹ 13 995",
    image: "https://s3-alpha-sig.figma.com/img/4ec2/087c/e89e298eedea3b5b3ff13b986994a8d4?Expires=1692576000&Signature=Ls0wAxgOWqJfopxVvPVSlSUkhpi-15ULcBFQXdPXHLyom~YlnyfHRdf2K~jCpZVCF7INoD4JL0wRzVlHTy81JodXeIrurnPia9pqKrEB5Omjidg8MYDHIQgl6ETq6vn5zbbVI8EV64R4auw0zTYw2jQcsQrFQatwQzPQ5kZcjTT71Ox9aZIEXQjKgzgdrAGYPP8EJjYny8e9Nbi-BhOe9USAN61U~yhSBzOwBUyiRu5TABkbwtVD339nGVdvJebMP27VgslsFyZ6msuCNwo0c3pbLgZpS8zV2Xqe5grP9fIFsBFuhZCkyj9bCjFbZkT4rzJFUH73kuH9igahBU1L4A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
  },
  {
    HeadText:"Nike Air Max 97 SE",
    about:"Men's Shoes",
    price:"₹ 16 995",
    image: "https://s3-alpha-sig.figma.com/img/d6a9/4e76/a39cc1c5f2b8c9f30c80054e597eab6b?Expires=1692576000&Signature=HkUBT66ZngzTP4LHxhG7UqLT5zz7~-5rN-VIvEHYCgbCsICTNXmiK1spJsMLR-PZ7UhPexpcw9~8ZeTRpDM47rhAgTDEO~Uwn17A1joO45yUljcsnEWDBKnY9Qm1hdIEtmyT6z3i1MnOP9EP7kpueplep1h31rM8edW1QQoBTdD0VrGwfo7R7an5P-HHOBYchcVfPza6H7~luyCb07fav8FfhfaiixbFGxwLxIZ7Tcu1Fsx6qqSa0IJuAX68btCxzaimHGqxxGYOq~wBOPwJVlN8iqEYNwughuNOdzyXYA-znEt5TL-U2r--UMFs0kpw8T5SUwWs2FBsGuwEGU-Zuw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
  }
  ]
  return (
    <div>
        <section id="cards">
      <div className="container head">
      <div className="row">
      <div className="col-12"><h2>Best of Air Max</h2></div>
    </div>
      <div className="row cards g-3">
        {
          Element.map((data,index)=>(
            <Card key={index} HeadText={data.HeadText} about={data.about} price={data.price} image={data.image} />
          ))
        }
          {/* <div className="col-4">
          <Card  HeadText="Nike Air Max Pulse" about="Women's Shoes" price="₹ 13 995" image="https://s3-alpha-sig.figma.com/img/4ec2/087c/e89e298eedea3b5b3ff13b986994a8d4?Expires=1692576000&Signature=Ls0wAxgOWqJfopxVvPVSlSUkhpi-15ULcBFQXdPXHLyom~YlnyfHRdf2K~jCpZVCF7INoD4JL0wRzVlHTy81JodXeIrurnPia9pqKrEB5Omjidg8MYDHIQgl6ETq6vn5zbbVI8EV64R4auw0zTYw2jQcsQrFQatwQzPQ5kZcjTT71Ox9aZIEXQjKgzgdrAGYPP8EJjYny8e9Nbi-BhOe9USAN61U~yhSBzOwBUyiRu5TABkbwtVD339nGVdvJebMP27VgslsFyZ6msuCNwo0c3pbLgZpS8zV2Xqe5grP9fIFsBFuhZCkyj9bCjFbZkT4rzJFUH73kuH9igahBU1L4A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
          </div>
          <div className="col-4">
            <Card HeadText="Nike Air Max Pulse" about="Men's Shoes" price="₹ 13 995" image="https://s3-alpha-sig.figma.com/img/4ec2/087c/e89e298eedea3b5b3ff13b986994a8d4?Expires=1692576000&Signature=Ls0wAxgOWqJfopxVvPVSlSUkhpi-15ULcBFQXdPXHLyom~YlnyfHRdf2K~jCpZVCF7INoD4JL0wRzVlHTy81JodXeIrurnPia9pqKrEB5Omjidg8MYDHIQgl6ETq6vn5zbbVI8EV64R4auw0zTYw2jQcsQrFQatwQzPQ5kZcjTT71Ox9aZIEXQjKgzgdrAGYPP8EJjYny8e9Nbi-BhOe9USAN61U~yhSBzOwBUyiRu5TABkbwtVD339nGVdvJebMP27VgslsFyZ6msuCNwo0c3pbLgZpS8zV2Xqe5grP9fIFsBFuhZCkyj9bCjFbZkT4rzJFUH73kuH9igahBU1L4A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"/>
          </div>
          <div className="col-4">
            <Card HeadText="Nike Air Max 97 SE" about="Men's Shoes" price="₹ 16 995" image="https://s3-alpha-sig.figma.com/img/d6a9/4e76/a39cc1c5f2b8c9f30c80054e597eab6b?Expires=1692576000&Signature=HkUBT66ZngzTP4LHxhG7UqLT5zz7~-5rN-VIvEHYCgbCsICTNXmiK1spJsMLR-PZ7UhPexpcw9~8ZeTRpDM47rhAgTDEO~Uwn17A1joO45yUljcsnEWDBKnY9Qm1hdIEtmyT6z3i1MnOP9EP7kpueplep1h31rM8edW1QQoBTdD0VrGwfo7R7an5P-HHOBYchcVfPza6H7~luyCb07fav8FfhfaiixbFGxwLxIZ7Tcu1Fsx6qqSa0IJuAX68btCxzaimHGqxxGYOq~wBOPwJVlN8iqEYNwughuNOdzyXYA-znEt5TL-U2r--UMFs0kpw8T5SUwWs2FBsGuwEGU-Zuw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"/>
          </div> */}
    </div>
      </div>
    </section>
    </div>
  )
}

export default Cards