import './Location.scss';

export default function Location() {
  return (
   <div className="location">
    <h1>زر مكتبنا</h1>
    <p>يقع مكتبنا في قلب المنطقة الصناعية بالرياض، ومجهز بمرافق حديثة وصالة عرض تعرض أحدث منتجاتنا وحلولنا.</p>
    <div className="location-cont">
        <div className="location-info">
            <i className="fa-solid fa-location-dot"></i>
            <p>الرياض، المملكة العربية السعودية</p>
            <p>المنطقة الصناعية</p>
        </div>
    </div>
   </div>
  )
}
