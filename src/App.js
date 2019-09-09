import React,{ Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      index : 0
  }
  this.next = this.next.bind(this)
  }

  next(){
    if(this.state.index === 9)
    {
this.setState({
  index : 1
});
  }
  else
    {
this.setState({
  index : this.state.index + 1
})
  }
  }

render(){
  let loikhuyen = [
    'Đôi khi chúng ta tốn quá nhiều thời gian để nghĩ về một người trong khi họ chẳng nghĩ đến chung ta nổi 1 giây',
    'Khi con người ta mất cân bằng ở cuộc sống thật. Họ tìm đến thế giới ảo và bám víu vào đó. Càng cô đơn bao nhiêu, con người ta lại sống ảo bấy nhiêu',
    'Đừng lãng phí CUỘC ĐỜI vào việc ghét bỏ người khác. Cuộc đời này, dể yêu thương người khác còn chưa đủ. Bởi mỗi chúng ta chỉ có MỘT LẦN để sống',
    'Có rất nhiều chuyện trước khi kịp quý trọng đã trở thành chuyện xưa Có rất nhiều người trước khi kịp để tâm đã trở thành người cũ Cuộc sống không bán vé khứ hồi, mất đi là mất đi vĩnh viễn không lấy lại được Chúng ta thường già đi quá nhanh nhưng sự thông minh lại đến quá muộn',
    'Lời xin lỗi không có nghĩa là bạn sai và người khác đúng. Lời xin lỗi có nghĩa là bạn coi trọng mối quan hệ đó hơn những điều đã xảy ra',
    'Thực ra, con người luôn ngược đời, người yêu bạn chiều chuộng bạn thì bạn không thèm. Người lạnh lùng, ơ hờ với bạn thì bạn lại theo đuổi mãi không thôi. Cuối cùng, người bị tổn thương đầy mình là chính bản thân bạn',
    'Thực ra những người hay cười, lại luôn cần người khác yêu thương',
    'Cuộc sống, là một bộ sách vô số chữ, mỗi người có cách đọc của riêng mình. Cuộc sống, là một câu hỏi có nhiều lời giải, mỗi người có đáp án của riêng mình. Cuộc sống, là một tách trà, mỗi người có cách thưởng thức của riêng mình. Những lúc không vui, hãy tự nhủ với bản thân: Rằng tất thảy của tất thảy, chính là để cuộc sống, thoải mái hơn, vui vẻ hơn, hạnh phúc hơn',
    'Con gái, không cần phải nghiêng nước nghiêng thành, chỉ cần một người đàn ông nghiêng về cô ấy cả một đời!',
    'Bí quyết của sự thành công là hàng ngày cố gắng hơn người khác một chút',
  ]
  const loikhuyenhientai = loikhuyen[this.state.index]
  let maunen = [
    'rgba(65,184,116,0.35)','rgba(7,124,136,0.35)','rgba(47,114,166,0.35)','rgba(147,184,22,0.35)','rgba(11,84,116,0.35)','rgba(100,100,23,0.35)','rgba(147,184,76,0.35)','rgba(147,34,116,0.2)','rgba(88,34,11,0.35)','rgba(76,184,116,0.35)'
  ]
  let mauchu = [
    'rgba(65,184,116,1)','rgba(7,124,136,1)','rgba(47,114,166,1)','rgba(147,184,22,1)','rgba(11,84,116,1)','rgba(100,100,23,1)','rgba(147,184,76,1)','violet','rgba(88,34,11,1)','rgba(76,184,116,1)'
  ]
  return (
    <div className ='boss' style={{ color : mauchu[this.state.index], backgroundColor : maunen[this.state.index]}}>
    <div className="app">
      <div className="total">
      <div className ='content'>
        {loikhuyenhientai}
      </div>
        <div className='footer'>
          <div className='link'>
          <a target='_blank' href='https://www.facebook.com/'><button className='btn'>Facebook</button></a>
         <a target='_blank' href ='https://zalo.me/pc'> <button className='btn'>Zalo</button></a>
          </div>
          <div className ="next">
          <button className ='btn' onClick ={this.next}>Next</button>
          </div>
      </div>
      </div>
      <h5 className ='Coded by'>By HoangTuLapTrinh</h5>
    </div>
    </div>
  );
}
}

export default App;
