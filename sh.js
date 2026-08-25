background: #0b1929;

  border-radius: 18px;

  padding: 22px;
}

.courseIcon {
  font-size: 34px;
}

.tags {
  display: flex;

  gap: 6px;

  margin: 10px 0;
}

.tags span,
.skill {
  font-size: 10px;

  padding: 3px 8px;

  border-radius: 20px;

  background: #ffffff0a;

  color: #9fb0c4;
}

.course h3 {
  margin: 8px 0;

  font-size: 18px;
}

.course p {
  color: #8292a8;

  font-size: 13px;
}

.course .meta {
  display: flex;

  justify-content: space-between;

  margin: 18px 0;
}

.progress {
  height: 5px;

  background: #ffffff12;

  border-radius: 9px;

  margin: 8px 0;
}

.progress i {
  display: block;

  height: 100%;

  background: #38bdf8;

  border-radius: 9px;
}

.courseLink {
  display: block;

  color: #38bdf8;

  margin-top: 15px;

  font-size: 12px;
}

/* CTA */

.cta {
  margin: 40px 8% 90px;

  padding: 40px;

  border-radius: 25px;

  border:
    1px solid #38bdf833;

  background:
    linear-gradient(
      110deg,
      #0c2337,
      #101d38
    );

  display: flex;

  align-items: center;

  justify-content: space-between;
}

.cta h2 {
  font-size: 30px;
}

/* PAGE TITLE */

.pageTitle {
  padding: 70px 8% 35px;

  max-width: 1400px;

  margin: auto;
}

.pageTitle h1 {
  font-size: 42px;

  margin: 8px 0;
}

.pageTitle p {
  color: #92a3b8;
}

/* FILTER */

.filter {
  display: flex;

  gap: 8px;

  padding:
    0 8% 30px;
}

.filter button,
.tab {
  border:
    1px solid #ffffff15;

  background: #0b1929;

  color: #9aabbe;

  padding: 8px 15px;

  border-radius: 10px;

  cursor: pointer;
}

.filter button.selected,
.filter button:hover,
.activeTab {
  background: #17324b;

  color: white;

  border-color: #38bdf855;
}

.coursesGrid {
  padding:
    0 8% 90px;
}

/* COURSE DETAIL */

.courseHero {
  margin:
    40px 8% 20px;

  padding: 35px;

  border-radius: 24px;

  background: #0b1929;

  border:
    1px solid #ffffff12;

  display: grid;

  grid-template-columns:
    auto
    1fr
    auto;

  gap: 25px;

  align-items: center;
}

.courseBigIcon {
  font-size: 65px;
}

.courseHero h1 {
  margin: 5px 0;
}

.courseHero p {
  color: #93a4b8;
}

.tabs {
  display: flex;

  gap: 8px;

  padding: 0 8%;

  margin: 25px 0;
}

.lessonList,
.videoBox,
.examPreview {
  margin:
    0 8% 80px;

  max-width: 950px;
}

.lesson {
  display: flex;

  align-items: center;

  gap: 15px;

  padding: 18px;

  border-bottom:
    1px solid #ffffff0e;
}

.lesson > span:first-child {
  color: #38bdf8;
}

.lesson div {
  flex: 1;
}

.lesson small {
  display: block;
}

.videoBox,
.examPreview {
  min-height: 300px;

  display: grid;

  place-items: center;

  text-align: center;

  background: #0b1929;

  border:
    1px solid #ffffff12;

  border-radius: 20px;

  padding: 40px;
}

.play {
  font-size: 50px;
}

/* EXAMS */

.examGrid {
  padding:
    0 8% 90px;

  display: grid;

  grid-template-columns:
    repeat(4, 1fr);

  gap: 15px;
}

.examCard {
  border:
    1px solid #ffffff12;

  background: #0b1929;

  border-radius: 18px;

  padding: 22px;
}

.examNo {
  color: #38bdf8;

  font-size: 12px;
}

.examCard h3 {
  font-size: 18px;
}

.examCard p {
  color: #8292a8;

  font-size: 13px;
}

.examCard .btn {
  margin-top: 18px;
}

/* JOBS */

.jobSearch {
  margin:
    0 8% 25px;

  display: flex;

  gap: 10px;
}

.jobSearch input,
.jobSearch select,
.auth input {
  background: #0b1929;

  border:
    1px solid #ffffff15;

  color: white;

  border-radius: 10px;

  padding: 12px;

  font: inherit;
}

.jobSearch input {
  flex: 1;
}

.jobs {
  margin:
    0 8% 90px;
}

.job {
  display: flex;

  align-items: center;

  gap: 20px;

  margin-bottom: 12px;

  padding: 22px;

  border:
    1px solid #ffffff12;

  background: #0b1929;

  border-radius: 18px;
}

.companyLogo {
  width: 50px;
  height: 50px;

  border-radius: 14px;

  display: grid;

  place-items: center;

  background: #152b42;

  font-weight: 900;
}

.jobMain {
  flex: 1;
}

.jobMain h3 {
  margin: 2px 0;
}

.skill {
  display: inline-block;

  margin: 10px 5px 0 0;
}

/* ARTICLES */

.article {
  border:
    1px solid #ffffff12;
