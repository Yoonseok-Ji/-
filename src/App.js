import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('dolseom');
  const [videoOpen, setVideoOpen] = useState(false);

  const openVideo = () => setVideoOpen(true);
  const closeVideo = () => setVideoOpen(false);

  useEffect(() => {
    // Scroll animation observer
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, observerOptions);

    // Observe all animate-on-scroll elements
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    animateElements.forEach(el => observer.observe(el));

    // Circle animation with delays
    const circleObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const delay = parseInt(entry.target.dataset.delay) * 500;
          setTimeout(() => {
            entry.target.classList.add('animate-circle');
          }, delay);
        }
      });
    }, observerOptions);

    const circleElements = document.querySelectorAll('.animate-circle');
    circleElements.forEach(el => circleObserver.observe(el));

    return () => {
      observer.disconnect();
      circleObserver.disconnect();
    };
  }, []);

  return (
    <div className="App">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo-section">
            <img src={process.env.PUBLIC_URL + "/dolseom-logo.png"} alt="돌섬미역국" className="logo-img" />
            <img src={process.env.PUBLIC_URL + "/whitewhale-logo.png"} alt="흰고래연어육회" className="logo-img" />
          </div>
          <div className="brand-info">
            <div className="logo">흰고래연어육회</div>
            <div className="phone-number">1644-6123</div>
          </div>
          <div className="nav-menu">
            <a href="#home">홈</a>
            <a href="#about">소개</a>
            <a href="#menu">메뉴</a>
            <a href="#franchise">가맹점</a>
            <a href="#contact">문의</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero with-bg" style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('${process.env.PUBLIC_URL}/첫컴포넌트 배경사진.png')`
      }}>
        <div className="hero-content">
          <h1 className="hero-title animate-on-scroll">오직, 배달 만으로</h1>
          <h2 className="hero-revenue animate-on-scroll">월 5천매출</h2>
          <p className="hero-subtitle animate-on-scroll">이제, 점주님들의 차례입니다!</p>
          <div className="hero-points">
            <p className="animate-on-scroll">단순 유통업체? <strong>NO!</strong></p>
            <p className="animate-on-scroll">소스 개발업체? <strong>NO!</strong></p>
            <p className="hero-highlight animate-on-scroll">흰고래 & 돌섬은 '진짜' 전문가입니다.</p>
          </div>
          <p className="hero-description animate-on-scroll">본사에서 직접 4년간 매장을 운영하며 정립해온<br/>확실한 성공 메커니즘을 경험하세요.</p>
          
          <div className="hero-conclusion animate-on-scroll">
            ⋮<br/>⋮<br/>⋮
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="video-section">
        <div className="video-component">
          <iframe 
            width="100%" 
            height="700" 
            src="https://www.youtube.com/embed/jnHBFD0iHYY" 
            title="흰고래연어육회 소개 영상"
            frameBorder="0" 
            allowFullScreen
            style={{borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.3)'}}
          ></iframe>
        </div>
      </section>

      {/* Stable Revenue System */}
      <section className="stable-revenue">
        <div className="container">
          <h2 className="section-title animate-on-scroll">하루종일 이어지는 <span className="highlight">안정적인 매출</span></h2>
          <p className="system-description animate-on-scroll">단순한 유통사나 소스업체에서는 이런 구조를 시스템화 할 수 없음</p>
          
          <div className="revenue-process">
            <div className="process-circle animate-circle" data-delay="0">
              <div className="circle-content">
                <h3>낮X밤</h3>
                <p>주력메뉴운영</p>
              </div>
            </div>
            <div className="process-arrow">→</div>
            <div className="process-circle animate-circle" data-delay="1">
              <div className="circle-content">
                <h3>비용최소화</h3>
                <p>운영효율화</p>
              </div>
            </div>
            <div className="process-arrow">→</div>
            <div className="process-circle animate-circle final-circle" data-delay="2">
              <div className="circle-content">
                <h3>하루종일</h3>
                <p>안정적인 매출실현</p>
              </div>
            </div>
          </div>
          
          <div className="experience-text animate-on-scroll">
            <p>흰고래&돌섬 본사에서 매장을 직접 운영하며 쌓아온 실전경험</p>
            <p><strong>직접 구축한 성공 메커니즘입니다.</strong></p>
          </div>
        </div>
      </section>

      {/* Performance Section */}
      <section className="performance">
        <div className="container">
          <h2 className="section-title">가맹점 <span className="highlight">실적부터</span> 공개!</h2>
          <div className="total-revenue">
            <h3>월 평균</h3>
            <div className="total-amount">60,657,356만원</div>
          </div>
          
          <div className="stores-slider">
            <div className="stores-track">
              <div className="store-card">
                <h4>강남점</h4>
                <div className="store-amount">45,000,000원</div>
                <div className="progress-bar">
                  <div className="progress" style={{width: '75%'}}></div>
                </div>
              </div>
              <div className="store-card">
                <h4>홍대점</h4>
                <div className="store-amount">41,781,100원</div>
                <div className="progress-bar">
                  <div className="progress" style={{width: '69%'}}></div>
                </div>
              </div>
              <div className="store-card">
                <h4>신촌점</h4>
                <div className="store-amount">52,340,200원</div>
                <div className="progress-bar">
                  <div className="progress" style={{width: '87%'}}></div>
                </div>
              </div>
              <div className="store-card">
                <h4>강남점</h4>
                <div className="store-amount">45,000,000원</div>
                <div className="progress-bar">
                  <div className="progress" style={{width: '75%'}}></div>
                </div>
              </div>
              <div className="store-card">
                <h4>홍대점</h4>
                <div className="store-amount">41,781,100원</div>
                <div className="progress-bar">
                  <div className="progress" style={{width: '69%'}}></div>
                </div>
              </div>
              <div className="store-card">
                <h4>신촌점</h4>
                <div className="store-amount">52,340,200원</div>
                <div className="progress-bar">
                  <div className="progress" style={{width: '87%'}}></div>
                </div>
              </div>
            </div>
          </div>
          
          <p className="disclaimer">이 수치에 거짓은 없습니다.<br/>*상권 및 운영방식 등에 의해 상이할 수 있습니다.</p>
        </div>
      </section>

      {/* Scrolling Text */}
      <div className="scrolling-section">
        <div className="scroll-content">
          {Array(20).fill().map((_, i) => (
            <span key={i}>놀라지마세요!</span>
          ))}
        </div>
      </div>

      {/* Profit Section */}
      <section className="profit">
        <div className="container">
          <h2 className="section-title">가장 중요한 <span className="highlight">순이익은</span> 무려 25%이상</h2>
          <div className="profit-display">
            <img src={process.env.PUBLIC_URL + "/profit.png"} alt="순이익 27.2%" className="profit-image" />
            <div className="profit-arrow">→</div>
            <div className="profit-text">27.2%</div>
          </div>
        </div>
      </section>

      {/* Dual Brand Section */}
      <section className="dual-brand">
        <div className="container">
          <h2 className="section-title"><span className="highlight">차원이 다른</span> 수익 실현!</h2>
          <h3 className="brand-subtitle">가맹사업계의 <span className="highlight">초신성</span>, 낮 밤 듀얼 브랜딩 흰고래&돌섬입니다.</h3>
          
          <div className="dual-concept">
            <div className="concept-item">
              <img src={process.env.PUBLIC_URL + "/dolseom-logo.png"} alt="돌섬미역국" className="concept-logo" />
            </div>
            <div className="plus">+</div>
            <div className="concept-item">
              <h4>밤 - 흰고래연어육회</h4>
              <img src={process.env.PUBLIC_URL + "/whitewhale-logo.png"} alt="흰고래연어육회" className="concept-logo" />
            </div>
          </div>
        </div>
      </section>

      {/* Taste Section */}
      <section className="taste with-bg" style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('${process.env.PUBLIC_URL}/taste-bg.jpg')`
      }}>
        <div className="container">
          <h2 className="section-title"><span className="highlight">고객을 사로잡는</span> 맛!</h2>
          <h3 className="taste-subtitle"><span className="highlight">주문율 상승의</span> 근본<br/>독창적인 맛과 구성!</h3>
          
          <div className="taste-features">
            <div className="taste-item">
              <img src={process.env.PUBLIC_URL + "/gravlax.png"} alt="그라브락스" className="taste-image" />
              <div className="taste-content">
                <h4>핑크빛 연어의 유혹, 그라브락스!</h4>
                <p>북유럽 전통 방식으로 숙성시킨 연어의 깊은 맛과 부드러운 식감이 일품입니다.</p>
              </div>
            </div>
            <div className="taste-item">
              <img src={process.env.PUBLIC_URL + "/sauce.png"} alt="깊은 풍미의 소스" className="taste-image" />
              <div className="taste-content">
                <h4>처음 경험하는 깊은 풍미의 소스!</h4>
                <p>특별한 레시피로 만든 소스가 연어의 맛을 한층 더 깊게 만들어줍니다.</p>
              </div>
            </div>
            <div className="taste-item">
              <img src={process.env.PUBLIC_URL + "/soup.png"} alt="5분 미역국" className="taste-image" />
              <div className="taste-content">
                <h4>5분?! 만에 이렇게 깊은맛을 낸다고?</h4>
                <p>빠른 조리시간에도 불구하고 깊고 진한 맛을 자랑하는 비법을 경험해보세요.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Reviews Section */}
      <section className="delivery-reviews">
        <div className="container">
          <h2 className="section-title">고객 <span className="highlight">배달후기</span></h2>
          
          <div className="reviews-slider">
            <div className="reviews-track">
              <div className="review-card">
                <img src={process.env.PUBLIC_URL + "/review1.png"} alt="배달후기 1" />
              </div>
              <div className="review-card">
                <img src={process.env.PUBLIC_URL + "/review2.png"} alt="배달후기 2" />
              </div>
              <div className="review-card">
                <img src={process.env.PUBLIC_URL + "/review3.png"} alt="배달후기 3" />
              </div>
              <div className="review-card">
                <img src={process.env.PUBLIC_URL + "/review1.png"} alt="배달후기 1" />
              </div>
              <div className="review-card">
                <img src={process.env.PUBLIC_URL + "/review2.png"} alt="배달후기 2" />
              </div>
              <div className="review-card">
                <img src={process.env.PUBLIC_URL + "/review3.png"} alt="배달후기 3" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Story */}
      <section className="success-story">
        <div className="container">
          <h2 className="section-title">6평에서 시작된 <span className="highlight">성공 스토리</span></h2>
          
          <div className="story-timeline">
            <div className="timeline-item">
              <div className="timeline-year">2020</div>
              <div className="timeline-content">
                <h3>작은 시작</h3>
                <p>20대 초반 창업자들이 6평 작은 가게에서 시작</p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-year">2021</div>
              <div className="timeline-content">
                <h3>듀얼 브랜드 개발</h3>
                <p>낮과 밤을 모두 잡는 혁신적인 듀얼 브랜드 시스템 구축</p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-year">2022</div>
              <div className="timeline-content">
                <h3>매출 급성장</h3>
                <p>월 5천만원 매출 달성, 지역 맛집으로 자리매김</p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-year">2024</div>
              <div className="timeline-content">
                <h3>가맹사업 시작</h3>
                <p>검증된 시스템으로 전국 가맹점 모집 시작</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Franchise Process */}
      <section className="franchise-process">
        <div className="container">
          <h2 className="section-title">가맹 <span className="highlight">진행 절차</span></h2>
          
          <div className="process-steps">
            <div className="step-item">
              <div className="step-number">STEP 1</div>
              <h3>상담 신청</h3>
              <p>전화 또는 온라인으로<br/>가맹 상담 신청</p>
            </div>
            
            <div className="step-arrow">→</div>
            
            <div className="step-item">
              <div className="step-number">STEP 2</div>
              <h3>매장 방문</h3>
              <p>본사 직영점 방문<br/>시스템 체험</p>
            </div>
            
            <div className="step-arrow">→</div>
            
            <div className="step-item">
              <div className="step-number">STEP 3</div>
              <h3>계약 체결</h3>
              <p>가맹계약 체결 및<br/>교육 일정 협의</p>
            </div>
            
            <div className="step-arrow">→</div>
            
            <div className="step-item">
              <div className="step-number">STEP 4</div>
              <h3>매장 준비</h3>
              <p>인테리어, 장비 설치<br/>오픈 준비</p>
            </div>
            
            <div className="step-arrow">→</div>
            
            <div className="step-item">
              <div className="step-number">STEP 5</div>
              <h3>그랜드 오픈</h3>
              <p>매장 오픈 및<br/>지속적인 운영 지원</p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="menu">
        <div className="container">
          <h2 className="section-title">흰고래&돌섬 다양하게 주문가능한 메뉴구성</h2>
          <p className="menu-time">모든메뉴는 전부 10:00~ 익일 01:00 까지 주문 가능합니다.</p>
          
          <div className="menu-tabs">
            <button 
              className={`tab-btn ${activeTab === 'dolseom' ? 'active' : ''}`}
              onClick={() => setActiveTab('dolseom')}
            >
              돌섬
            </button>
            <button 
              className={`tab-btn ${activeTab === 'whitewhale' ? 'active' : ''}`}
              onClick={() => setActiveTab('whitewhale')}
            >
              흰고래
            </button>
            <button 
              className={`tab-btn ${activeTab === 'side' ? 'active' : ''}`}
              onClick={() => setActiveTab('side')}
            >
              사이드
            </button>
          </div>
          
          <div className="menu-content">
            {activeTab === 'dolseom' && (
              <div className="menu-grid">
                <div className="menu-brand-header">
                  <img src={process.env.PUBLIC_URL + "/dolseom-logo.png"} alt="돌섬미역국" className="menu-brand-logo" />
                  <h3>돌섬메뉴</h3>
                </div>
                <div className="menu-items">
                  {['미역국', '소고기미역국', '돼지고기미역국', '새우미역국', '전복미역국', '조개미역국', '닭고기미역국', '해물미역국', '특미역국', '콩나물국', '북어국', '김치국', '된장국', '순두부국', '떡국'].map((item, index) => (
                    <div key={index} className="menu-item">
                      <div className="menu-image">🍲</div>
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {activeTab === 'whitewhale' && (
              <div className="menu-grid">
                <div className="menu-brand-header">
                  <img src={process.env.PUBLIC_URL + "/whitewhale-logo.png"} alt="흰고래연어육회" className="menu-brand-logo" />
                  <h3>흰고래 메뉴</h3>
                </div>
                <div className="menu-items">
                  {['그라브락스', '연어육회', '연어사시미', '연어덮밥', '연어포케', '연어타르타르', '연어카르파치오', '연어아보카도', '연어샐러드', '연어스테이크', '연어롤', '연어초밥', '연어나가사키', '연어크림파스타', '연어리조또'].map((item, index) => (
                    <div key={index} className="menu-item">
                      <div className="menu-image">🍣</div>
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {activeTab === 'side' && (
              <div className="menu-grid">
                <h3>사이드메뉴</h3>
                <div className="menu-items">
                  {['김치', '단무지', '콩나물', '시금치나물', '도라지나물', '고사리나물', '미역줄기', '오이무침', '무생채', '계란말이', '어묵볶음', '멸치볶음', '젓갈류', '음료수', '주류'].map((item, index) => (
                    <div key={index} className="menu-item">
                      <div className="menu-image">🥬</div>
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <div className="contact-bar">
        <div className="contact-content">
          <div className="contact-info">
            <strong>가맹문의 1644-6123</strong>
            <div className="sub-text">문의 남겨드리면 빠른 상담 도와드립니다</div>
          </div>
          <form className="contact-form">
            <input type="text" placeholder="성함" required />
            <input type="tel" placeholder="연락처" required />
            <input type="text" placeholder="희망지역" required />
            <button type="submit">문의하기</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
