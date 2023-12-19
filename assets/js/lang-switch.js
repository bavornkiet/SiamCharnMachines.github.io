var name_array = ['nav_home', 'nav_about', 'nav_products', 'nav_contact', 'nav_food', 'nav_metal', 'nav_warehouse', 'nav_cosmetic', 'nav_pharmaceutical',
    'nav_agricultural', 'nav_energy', 'nav_livestock', 'nav_automotive', 'nav_mill', 'nav_wooden', 'nav_construction', 'about_subtitle',
    'about_title', 'nav_spare', 'about_con_p', 'contact_topic1', 'contact_topic_text',
    'contact_message', 'contact_address1', 'contact_address2', 'contact_address3', 'contact_topic2', 'contact_topic3',
    'food_p', 'food_h2', 'metal_h2', 'metal_p', 'footer_col1', 'foot_home', 'foot_about', 'foot_spare', 'foot_products', 'foot_contact',
    'foot_quick', 'foot_links', 'foot_fb', 'foot_siam', 'foot_office', 'foot_address1', 'foot_address2', 'our_machine', 'rec_machine', 'spare_h1', 'spare1_h2', 'spare2_h2',
    'spare3_h2', 'spare_h5', 'spare1_p', 'spare2_p', 'spare3_p', 'spare4_p', 'spare5_p', 'spare6_p', 'spare7_p',
    'livestock_h2', 'livestock_p', 'livestock_label', 'warehouse_h2', 'warehouse_p', 'warehouse_label', 'our_product',
    'agricultural_h2', 'agricultural_p', 'agricultural_label1', 'agricultural_label2', 'pharmaceutical_h2', 'pharmaceutical_p',
    'pharmaceutical_label1', 'pharmaceutical_label2', 'cosmetic_h2', 'cosmetic_p', 'cosmetic_label1', 'cosmetic_label2', 'cosmetic_label3',
    'cosmetic_label4', 'wooden_h2', 'wooden_p', 'wooden_label', 'construction_h2', 'construction_p', 'construction_label', 'energy_h2', 'energy_p', 'automotive_h2', 'automotive_p', 'automotive_label', 'mill_h2', 'mill_p',
    'mill_label', 'energy_label', 'machine_details', 'machine_swipe', 'a_details', 'a_quotation', 'machine_name', 'machine_find',
    'spare_label1', 'spare_label2', 'spare_label3', 'spare_label4', 'spare_label5', 'spare_product', 'mac_product',
    'welcome', 'welcome_trust', 'siam_charn', 'abt_p', 'consultancy', 'delivery', 'after', 'about',
    'button1', 'button2', 'button3', 'button4', 'button5', 'button6', 'button7', 'button8', 'button9', 'button10', 'button11', 'button12'];

var paragraphs = document.getElementsByTagName("p");

var th = {
    about: "เกี่ยวกับเรา",
    consultancy: "ให้คำปรึกษา",
    delivery: "บริการจัดส่งและติดตั้ง",
    after: "บริการหลังการขาย",
    welcome: "ยินดีต้อบรับสู่",
    welcome_trust: "บริษัท สยาม ชาญ เชี่ยวชาญด้านเครื่องจักร และ ระบบอัตโนมัติที่ทันสมัย ​​เพื่อรองรับอุตสาหกรรมที่หลากหลายตั้งแต่ โลหะ ยาไปจนถึง อาหาร และอื่นๆ ความมุ่งมั่นของเราขยายไปสู่การให้บริการในด้านการปรึกษาเพื่อที่จะปรับสินค้าของเราให้เหมาะสมต่อความต้องการของลูกค้า ด้วยประสบการณ์ยาวนานถึง 32 ปีของเรา เราสามารถแนะนำแนวทางให้คุณบรรลุวัตถุประสงค์เฉพาะ ใว้วางใจสยามชาญเพื่อให้การดำเนินงานของท่านดำเนินไปอย่างราบรื่นและสร้างรายได้อย่างต่อเนื่อง",
    siam_charn: "บริษัท สยาม ชาญ",
    abt_p: "บริษัท สยามชาญ เป็นผู้นำด้านการผลิต การนำเข้าและการจัดจำหน่ายเครื่องจักรทันสมัยและระบบอัตโนมัติที่ครอบคลุมทุกด้าน เช่น ระบบควบคุม PLC, MES, และ SCADA รวมถึงอุตสาหกรรมที่หลากหลาย เช่น โลหะ, เภสัชภัณฑ์, อาหาร, โรงสี, และอื่นๆอีกมากมาย ความมุ่งมั่นของเราไม่จำกัดเพียงการจัดหาอุปกรณ์เท่านั้น แต่เรายังเชี่ยวชาญในการให้บริการในด้านการปรึกษาเพื่อที่จะปรับความต้องการให้เข้ากับลูกค้า เราใช้เวลาในการเข้าใจถึงความต้องการของลูกค้าอย่างละเอียด เพื่อให้ลูกค้าของ สยาม ชาญ มั่นใจได้ว่าท่านจะได้รับสินค้าที่ตอบโจทย์ต่อความต้องการของท่านมากที่สุด ด้วยความรู้ความชำนาญในด้านเครื่องจักรของเรา เรามั่นใจว่าท่านจะได้รับคำแนะนำที่มีค่าเกี่ยวกับการปฏิบัติตามวัตถุประสงค์ของท่าน ตั้งแต่การจัดส่งอุปกรณ์ระดับพรีเมี่ยมจนถึงการช่วยสอนอบรมให้คุณเชี่ยวชาญในการใช้งานเครื่องจักรและระบบของเรา  ใว้วางใจสยามชาญเพื่อให้การดำเนินงานของท่านดำเนินไปอย่างราบรื่นและสร้างรายได้อย่างต่อเนื่อง",
    mac_product: "รายละเอียดเครื่องจักร",
    menu_navbar: "เมนู",
    nav_home: "หน้าแรก",
    nav_about: "เกี่ยวกับเรา",
    nav_products: "รายละเอียดเครื่องจักร",
    nav_contact: "ติดต่อ",
    nav_food: "อุตสาหกรรมอาหารและเครื่องดื่ม",
    nav_metal: "อุตสาหกรรมโลหะและอโลหะ",
    nav_livestock: "อุตสาหกรรมผลิตอาหารปศุสัตว์และบรรจุ",
    nav_warehouse: "คลังสินค้าอัจฉริยะ ไร้คน",
    nav_cosmetic: "อุตสาหกรรมผลิตเครื่องสำอาง",
    nav_wooden: "อุตสาหกรรมไม้",
    nav_automotive: "อุตสาหกรรมยานยนต์",
    nav_agricultural: "อุตสาหกรรมแปรรูปเกษตรผลและแป้ง",
    nav_construction: "อุตสาหกรรมผลิตวัสดุก่อสร้าง",
    nav_energy: "อุตสาหกรรมพลังงานและชีวมวล",
    nav_pharmaceutical: "อุตสาหกรรมยาและเวชภัณฑ์",
    nav_mill: "เครื่องจักรโรงสี",
    nav_spare: 'อะไหล่และการบำรุงรักษา',
    // ----------------------------------------
    about_subtitle: "บริษัท สยาม ชาญ จำกัด",
    about_title: "เกี่ยวกับเรา",
    about_con_p: "บริษัท สยามชาญ จำกัด ก่อตั้งเมื่อปี พ.ศ. 2542 โดยคุณอธิรักษ์ ชาญพัฒนากร ทีมงานมืออาชีพที่ทุ่มเทของเรามีความเชี่ยวชาญร่วมกันซึ่งครอบคลุมมานานกว่า 32 ปีในอุตสาหกรรมต่างๆ เราเชี่ยวชาญในการออกแบบ การพัฒนา การทดสอบ และการผลิตเครื่องจักรอัตโนมัติแบบกำหนดเองเพื่อตอบสนองความต้องการเฉพาะของลูกค้าของเรา นอกจากนี้เรายังนำเสนอโซลูชั่นที่ครอบคลุมสำหรับระบบไฟฟ้าและระบบอัตโนมัติ ซึ่งรวมถึง ROBOT, PLC, HMI, SCADA, ERP, MES และ WMS ทั้งหมดนี้ได้รับการสนับสนุนจากความมุ่งมั่นอันแน่วแน่ในการให้บริการหลังการขายที่มีประสิทธิภาพ วัตถุประสงค์หลักของเราคือเพื่อให้มั่นใจว่าลูกค้าพึงพอใจสูงสุดและมอบผลประโยชน์ที่จับต้องได้ให้กับลูกค้าที่นับถือของเรา",
    // ----------------------------------------
    contact_topic1: "ที่อยู่",
    contact_topic_text: "ติดต่อเรา",
    contact_message: "หากท่านมีคำถามใด ๆ ที่เกี่ยวข้องกับผลิตภัณฑ์ของเรา ท่านสามารถส่งข้อความถึงเราได้จากที่นี่ เป็นเกรียติของเราที่ได้ช่วยท่าน",
    contact_address1: "บริษัท สยาม ชาญ จำกัด",
    contact_address2: "40 หมู่ 11 ถนนสุขสวัสดิ์ ในคลองบางปลากด",
    contact_address3: "พระสมุทรเจดีย์ สมุทรปราการ 10290",
    contact_topic2: "หมายเลขโทรศัพท์",
    contact_topic3: "อีเมล",

    // ----------------------------------------
    spare_h1: "คำสัญญาที่เรามีให้ต่อท่าน",
    spare1_h2: "ชิ้นส่วนอะไหล่คุณภาพสูง",
    spare2_h2: "การบริการโดยผู้เชี่ยวชาญ",
    spare3_h2: "มีสต็อกอะไหล่",
    spare_h5: "เครื่องจักรเสียและอะไหล่",
    spare1_p: "ที่บริษัท สยาม ชาญ เราทุ่มเทให้กับการบริการหลังการขายที่เป็นเลิศ ช่างเทคนิคผู้เชี่ยวชาญของเรารับประกันประสิทธิภาพสูงสุดสำหรับระบบ เครื่องจักร และอะไหล่ของท่าน เรารับประกันว่าผลิตภัณฑ์ของเรานั้นมีคุณภาพที่สูงเพื่อความอุ่นใจของท่าน",
    spare2_p: "เราใช้เฉพาะอะไหล่แท้ที่ได้รับการรับรองจากผู้ผลิตและจัดหาโดยตรงจากแหล่งที่มาเท่านั้น",
    spare3_p: "ช่างผู้เชี่ยวชาญของเรามีทักษะสูงในการจัดการกับข้อผิดพลาดทั่วไปและปัญหาที่ไม่คาดคิด",
    spare4_p: "เรามีสต็อกอะไหล่เก็บไว้เพื่อความสะดวกรวดเร็วของท่าน",
    spare5_p: "ที่บริษัท สยาม ชาญ เราทุ่มเทเพื่อลดเวลาหยุดทำงานของเครื่องจักรและเพิ่มรายได้ของท่านให้สูงสุด ไม่ว่าเครื่องของท่านจะเผชิญกับข้อผิดพลาดเล็กน้อยหรือความเสียหายอันใหญ่โต เราพร้อมที่จะแก้ไขปัญหาอย่างรวดเร็วให้กับท่าน ช่างบริการของเรามีความสามารถให้บริการได้อย่างครบวงจร ตั้งแต่การติดตั้งเครื่องจักรใหม่ไปจนถึงการซ่อมแซมอย่างรวดเร็วและการแจ้งเหตุฉุกเฉิน ทั้งหมดนี้ช่างของเราให้บริการด้วยความเป็นมืออาชีพและมีประสิทธิภาพ",
    spare6_p: "หากท่านต้องการสอบถามเกี่ยวกับอะไหล่ การสั่งซื้อ ติดตามการสั่งซื้อ หรือเกี่ยวกับบริการต่างๆ ท่านสามารถติดต่อทีมงานของเราผ่านเบอร์โทร",
    spare7_p: "หรืออีเมล",
    spare_label1: "อุปกรณ์",
    spare_label2: "ใบเลื่อย",
    spare_label3: "หินลับใบเลื่อย",
    spare_label4: "อุปกรณ์ทำท่อ",
    spare_label5: "อะไหล่ ที่ขูดตะเข็บ",
    spare_product: "อะไหล่ เครื่องจักร",
    // ----------------------------------------
    our_machine: "เครื่องจักรของเรา",
    rec_machine: "เครื่องจักรแนะนำ",
    // ----------------------------------------
    food1_label: "เครื่องจักรสำหรับขวดแก้ว, ขวด PET, ขวด PP",
    food2_label: "เครื่องจักรสำหรับถุงสำเร็จรูป เช่นมีซิฟบนถุง",
    food3_label: "เครื่องจักรสำหรับถุงจากม้วนฟิล์ม",
    food4_label: "เครื่องจักรสำหรับกระป๋อง",
    food5_label: "เครื่องจักรบรรจุภัณฑ์และหุ่นยนต์อัตโนมัติ",
    food_p: "ยินดีต้อนรับสู่ส่วนอุตสาหกรรมบรรจุภัณฑ์อาหารและเครื่องดื่ม เครื่องจักรที่ทันสมัยของเราผลิตขวดแก้ว ขวด PET ขวด PP ถุงสำเร็จรูปพร้อมซิป ถุงม้วนฟิล์ม และกระป๋อง เราเสริมศักยภาพให้กับโซลูชันบรรจุภัณฑ์ของท่านเพื่อความสดใหม่ ความสะดวก และความยั่งยืน ทำให้มั่นใจได้ว่าผลิตภัณฑ์ของท่านโดดเด่นในตลาดที่มีการแข่งขันสูงในปัจจุบัน สำรวจนวัตกรรมกับเรา ซึ่งความแม่นยำและความยืดหยุ่นตอบสนองความต้องการของอุตสาหกรรม",
    food_h2: "อุตสาหกรรมอาหารและเครื่องดื่ม",
    // ----------------------------------------
    metal_h2: "อุตสาหกรรมโลหะและอโลหะ",
    metal_p: "ยินดีต้อนรับสู่ส่วนอุตสาหกรรมโลหะและอโลหะ เราเชี่ยวชาญในการจัดหาเครื่องจักรชั้นนำสำหรับการแปรรูปแผ่นและเพลท การจัดการคอยล์ การผลิตคาน H และรูปทรงโครงสร้าง งานท่อ งานเหล็กข้ออ้อยและลวด และระบบอัตโนมัติขั้นสูง ด้วยเทคโนโลยีที่ล้ำสมัยของเรา เราขับเคลื่อนประสิทธิภาพและความแม่นยำในการผลิตโลหะ เพิ่มขีดความสามารถให้กับธุรกิจต่างๆ ในการกำหนดอนาคตของโซลูชันด้านโครงสร้างและอุตสาหกรรม ค้นพบนวัตกรรมและความน่าเชื่อถือในทุกเครื่องจักรที่เรานำเสนอ",
    metal1_label: "เครื่องจักรสำหรับเหล็ก ม้วน คอยล์",
    metal2_label: "เครื่องจักรสำหรับงานแผ่น SHEET or PLATES",
    metal3_label: "เครื่องจักรสำหรับงานเหล็ก โครงสร้าง H Beam and all structure shapes",
    metal4_label: "เครื่องจักรสำหรับงานท่อ",
    metal5_label: "เครื่องจักรสำหรับงานเหล็กข้ออ้อย และ ลวด",
    metal6_label: "ระบบ Automation",
    machine_details: "รายละเอียด",
    machine_swipe: "ปัดเพื่อดูเพิ่มเติม",
    a_details: "สอบถามรายละเอียด",
    a_quotation: "ขอใบเสนอราคา",
    machine_name: "ชื่อเครื่องจักร",
    machine_find: "ข้อมูลเพิ่มเติม",
    // ----------------------------------------
    livestock_h2: "อุตสาหกรรมอาหารสัตว์และการบรรจุ",
    livestock_p: "ยินดีต้อนรับสู่ส่วนอุตสาหกรรมการผลิตอาหารปศุสัตว์และบรรจุภัณฑ์ ซึ่งความแม่นยำและประสิทธิภาพเป็นสิ่งที่สำคัญยิ่ง เครื่องจักรของเรา ไม่ว่าจะเป็นเครื่องอบข้าวโพด เครื่องบดแบบค้อนเหวี่ยง โรงสีลูกกลิ้ง และอื่นๆ สามารถช่วยให้การปฏิบัติงานของท่านมีคุณภาพอาหารสัตว์สูงสุด ตั้งแต่การจ่ายส่วนผสมไปจนถึงการบรรจุถุง การจัดวางบนพาเลท และการจัดการข้อมูล เรามีโซลูชันที่ครอบคลุม ยกระดับการผลิตอาหารสัตว์ของท่านด้วยเทคโนโลยีล้ำสมัยและการสนับสนุนจากผู้เชี่ยวชาญ",
    livestock_label: "เครื่องจักรสำหรับผลิตอาหารปศุสัตว์และบรรจุ",

    // ----------------------------------------
    warehouse_h2: "คลังสินค้าอัตโนมัติ",
    warehouse_p: "ยินดีต้อนรับสู่แผนกคลังสินค้าอัตโนมัติของเรา เราเชี่ยวชาญด้านการออกแบบคลังสินค้าอัจฉริยะ โซลูชันชั้นวางผลิตภัณฑ์ และระบบอัตโนมัติขั้นสูง เช่น AGV และ RGV รถยกไร้คนขับและเครนเรียงซ้อนของเราเพิ่มประสิทธิภาพการทำงาน สำรวจความเชี่ยวชาญของเราในด้านเทคโนโลยีระบบอัตโนมัติ เช่น WMS, PLC, HMI, SCADA, MES และ ERP เพื่อปรับปรุงการจัดการคลังสินค้าของท่านเพื่อประสิทธิภาพสูงสุด",
    warehouse_label: "คลังสินค้าอัจฉริยะ ไร้คน",
    our_product: "สินค้าของเรา",
    // ----------------------------------------

    // ----------------------------------------
    agricultural_h2: "อุตสาหกรรมการเกษตรและการแปรรูปแป้ง",
    agricultural_p: "ยินดีต้อนรับสู่ส่วนอุตสาหกรรมการเกษตรและแปรรูปแป้ง เราทุ่มเทเพื่อนำเสนอโซลูชั่นเครื่องจักรขั้นสูงที่ปรับให้เหมาะกับความต้องการที่เข้มงวดของท่าน ข้อเสนอของเราครอบคลุมอุปกรณ์ที่มีความแม่นยำหลากหลายประเภท เข้าร่วมกับเราในการยกระดับความพยายามด้านการเกษตรและการแปรรูปแป้งของท่านไปสู่อีกระดับของความเป็นมืออาชีพ ประสิทธิภาพ และคุณภาพ",
    agricultural_label1: "เครื่องจักรสำหรับการแปรรูปเกษตรผลและแป้ง​",
    agricultural_label2: "ระบบ Automation สายการผลิต",
    // ----------------------------------------
    pharmaceutical_h2: "อุตสาหกรรมการผลิตยาและเวชภัณฑ์ ",
    pharmaceutical_p: "ยินดีต้อนรับสู่ส่วนอุตสาหกรรมยา เราเชี่ยวชาญในการจัดหาเครื่องจักรที่ทันสมัยสำหรับการผลิตยาและเวชภัณฑ์ ควบคู่ไปกับเครื่องบรรจุที่ทันสมัยสำหรับหลอดพับ เทคโนโลยีของเรารับประกันความแม่นยำ คุณภาพ และการปฏิบัติตามมาตรฐานอุตสาหกรรม ซึ่งมีส่วนช่วยในการส่งมอบผลิตภัณฑ์ดูแลสุขภาพที่ปลอดภัยและมีประสิทธิภาพ",
    pharmaceutical_label1: "เครื่องจักรสำหรับยาและเวชภัณฑ์",
    pharmaceutical_label2: "เครื่องจักรสำหรับงานหลอดและเครื่องจักรบรรจุภัณฑ์และหุ่นยนต์อัตโนมัติ",
    // ----------------------------------------
    cosmetic_h2: "อุตสาหกรรมการผลิตเครื่องสำอาง",
    cosmetic_p: "ยินดีต้อนรับสู่ส่วนการผลิตเครื่องสำอาง เราเชี่ยวชาญในการจัดหาเครื่องจักรสำหรับบรรจุและบรรจุใส่ผลิตภัณฑ์แก้ว ขวดพลาสติก หลอดพับ และภาชนะเครื่องสำอางต่างๆทั้งหลาย เครื่องจักรล้ำสมัยของเรารับประกันความแม่นยำและประสิทธิภาพในกระบวนการผลิต และเครื่องทำลิปสติกของเรายังสามารถช่วยให้ท่านสร้างสรรค์ผลิตภัณฑ์เครื่องสำอางที่น่าทึ่งได้ เข้าร่วมกับเราในการยกระดับการผลิตเครื่องสำอางของท่าน",
    cosmetic_label1: "เครื่องจักรสำหรับขวดแก้ว, ขวดพลาสติก",
    cosmetic_label2: "เครื่องจักรสำหรับงานบรรจุหลอด",
    cosmetic_label3: "เครื่องจักรสำหรับงานตลับ",
    cosmetic_label4: "เครื่องจักรสำหรับงานลิปสติก",
    // ----------------------------------------
    wooden_h2: "อุตสาหกรรมการผลิตไม้",
    wooden_p: "ยินดีต้อนรับสู่ส่วนการผลิตไม้ เรามีเครื่องจักรหลากหลายประเภท รวมถึงเครื่องทำแผ่นไม้ MDF, HDF และ PB รวมถึงอุปกรณ์การผลิตไม้อัด เพื่อเสริมศักยภาพให้กับงานไม้ของท่าน ด้วยเทคโนโลยีของเรา ท่านสามารถเปลี่ยนวัตถุดิบให้เป็นชิ้นไม้ที่ประณีตซึ่งกำหนดคุณภาพและความทนทาน",
    wooden_label: "เครื่องจักรสำหรับทำไม้",
    // ----------------------------------------
    construction_h2: "อุตสาหกรรมการผลิตวัสดุก่อสร้าง",
    construction_p: "ยินดีต้อนรับสู่ส่วนวัสดุก่อสร้างและวัสดุชิ้นสำเร็จรูปของเรา ที่นี่เรามีเครื่องจักรขั้นสูงที่ออกแบบมาเพื่อเพิ่มประสิทธิภาพและปรับปรุงกระบวนการผลิตวัสดุก่อสร้างคุณภาพสูง พบกับอุปกรณ์ของเราที่ถูกปรับแต่งให้เหมาะกับความต้องการในงานก่อสร้างของท่าน และพร้อมเสนอการสร้างโครงการของท่านให้ก้าวสู่ระดับใหม่ไปพร้อมกัน",
    construction_label: "เครื่องจักรสำหรับการผลิตวัสดุก่อสร้างและวัสดุชิ้นสำเร็จรูป",
    // ----------------------------------------
    energy_h2: "อุตสาหกรรมพลังงานและชีวมวล",
    energy_p: "ยินดีต้อนรับสู่ส่วนพลังงานและพลังงานไบโอมาสของเรา โซลูชั่นของเรามอบวิธีการสร้างพลังงานที่ยั่งยืนและมีประสิทธิภาพในขณะลดผลกระทบต่อสิ่งแวดล้อม  สำรวจเครื่องจักรที่ปรับแต่งให้เหมาะกับความต้องการพลังงานของท่าน รวมถึงเครื่องย่อยไม้ เครื่องอบไล่ความชื้นอัตโนมัติ ร่วมรับชมและร่วมกันสร้างอนาคตที่เขียวสะอาดและยั่งยืนมากขึ้นไปด้วยกัน",
    energy_label: "เครื่องจักรสำหรับอุตสาหกรรมพลังงานและชีวมวล",
    // ----------------------------------------
    automotive_h2: "อุตสาหกรรมยานยนต์",
    automotive_p: "ยินดีต้อนรับสู่ส่วนการผลิตยานยนต์ของเรา เราเชี่ยวชาญในการนำเสนอเครื่องจักรอันล้ำสมัยสำหรับการเพิ่มประสิทธิภาพในการผลิตชิ้นส่วนยานยนต์ เรามีอุปกรณ์ขั้นสูงที่ถูกปรับแต่งให้เหมาะกับความต้องการของอุตสาหกรรมยานยนต์ เพื่อให้ท่านมั่นใจได้ในความแม่นยำ ความมีประสิทธิภาพ และคุณภาพที่ดีในทุกชิ้นส่วนที่เราช่วยผลิตขึ้น ร่วมกับเราในการนำนวัตกรรมและความเป็นเลิศในการผลิตยานยนต์",
    automotive_label: "เครื่องจักรและหุ่นยนต์สำหรับการผลิตยานยนต์",
    // ----------------------------------------
    mill_h2: "เครื่องจักรโรงสี",
    mill_p: "ยินดีต้อนรับสู่ส่วนเครื่องจักรโรงสีของเรา  เราเชี่ยวชาญในการนำเสนอเครื่องจักรทันสมัยที่ออกแบบมาเพื่อเพิ่มประสิทธิภาพในกระบวนการโรงสีและเพิ่มผลิตภาพ สำรวจเครื่องจักรนวัตกรรมของเราที่ถูกปรับแต่งให้เหมาะกับความต้องการในการดำเนินการโรงสีในยุคปัจจุบันของท่าน ไม่ว่าท่านจะอยู่ในสายอาหาร หรือการเกษตร โซลูชั่นเครื่องจักรโรงสีขั้นสูงของเราพร้อมมอบประสิทธิภาพในการผลิตและผลิตผลงานคุณภาพสูงสุดให้กับท่านได้ทันที",
    mill_label: "เครื่องจักรในโรงสี",
    footer_col1: "ณ บริษัท สยาม ชาญ เราเชื่อมั่นในการเพิ่มผลประโยชน์ให้กับลูกค้า ผ่านการผสมผสานผลิตภัณฑ์คุณภาพสูง กับ การออกแบบที่ล้ำสมัย และบริการที่ไร้ที่ติ ความสำเร็จของท่านคือสิ่งสำคัญที่สุดของเรา",
    foot_quick: "ติดต่อด่วน",
    foot_fb: "ติดตามเราได้ที่",
    foot_links: "การนำทาง",
    foot_home: "หน้าหลัก",
    foot_about: "เกี่ยวกับเรา",
    foot_products: "รายละเอียดเครื่องจักร",
    foot_spare: "อะไหล่และการบำรุงรักษา",
    foot_contact: "ติดต่อ",
    foot_office: "ที่ตั้งสำนักงาน",
    foot_siam: "บริษัท สยาม ชาญ จำกัด",
    foot_address1: "40 หมู่ 11 ถนนสุขสวัสดิ์ ในคลองบางปลากด",
    foot_address2: "พระสมุทรเจดีย์ สมุทรปราการ 10290",
    button1: "ข้อมูลเพิ่มเติม",
    button2: "ข้อมูลเพิ่มเติม",
    button3: "ข้อมูลเพิ่มเติม",
    button4: "ข้อมูลเพิ่มเติม",
    button5: "ข้อมูลเพิ่มเติม",
    button6: "ข้อมูลเพิ่มเติม",
    button7: "ข้อมูลเพิ่มเติม",
    button8: "ข้อมูลเพิ่มเติม",
    button9: "ข้อมูลเพิ่มเติม",
    button10: "ข้อมูลเพิ่มเติม",
    button11: "ข้อมูลเพิ่มเติม",
    button12: "ข้อมูลเพิ่มเติม",
};

var en = {
    about: "More About Us",
    consultancy: "Consultancy",
    delivery: "Delivery and Installation Services",
    after: "After-sales Services",
    welcome: "Welcome To",
    welcome_trust: "Siam Charn specializes in advanced machinery and automation systems, serving diverse industries, from metal and pharmaceuticals to food and more. Our commitment extends to tailored consultancy, ensuring precise solutions. Leveraging deep expertise, we guide you to meet specific objectives, delivering top-tier equipment and expertise for your industrial success.",
    siam_charn: "Siam Charn",
    abt_p: "Siam Charn is a manufacturer, importer and distributor of machinery, serving a wide spectrum of industries, including metal, pharmaceuticals, food, milling, and more. Our commitment goes beyond just providing equipment; we specialize in delivering tailored expert consultancy services. We invest the necessary time to comprehensively comprehend your project, guaranteeing precise and bespoke solutions. Leveraging our profound machinery expertise, we provide invaluable guidance on realizing your specific objectives. From delivering superior-grade equipment to ensuring your adeptness in its operation, rest assured, your comprehensive industrial needs are in capable hands.",
    mac_product: "Industry Products",
    menu_navbar: "Navbar",
    nav_home: "Home",
    nav_about: "About Us",
    nav_products: "Industry Products",
    nav_contact: "Contact Us",
    nav_food: "Food and Beverage Industry",
    nav_metal: "Ferrous and Non-ferrous Metal",
    nav_livestock: "Livestock Feed and Packing",
    nav_warehouse: "Automated Warehouse",
    nav_cosmetic: "Cosmetic Production",
    nav_wooden: "Wooden Board Industry",
    nav_automotive: "Automotive Industry",
    nav_agricultural: "Agricultural and Starch Processing",
    nav_construction: "Construction Materials Production",
    nav_energy: "Energy/Biomass Energy",
    nav_pharmaceutical: "Pharmaceutical Industry",
    nav_mill: "Mill Machinery",
    about_subtitle: "SIAM CHARN CO., LTD.",
    about_title: "About Us",
    nav_spare: "Spares and Maintenance",
    about_con_p: "Siam Charn Company Limited was established in 1999 by Mr. Athirak Charnpatanakorn. Our dedicated team of professionals holds a collective expertise spanning over 32 years across various industries. We specialize in the custom design, development, testing, and production of automatic machines tailored to meet our clients' specific requirements. Additionally, we provide comprehensive solutions for electrical systems and automation, encompassing ROBOT, PLC, HMI, SCADA, ERP, MES, and WMS, all supported by a steadfast commitment to efficient after- sales service. Our primary objective is to ensure maximum customer satisfaction and deliver tangible benefits to our esteemed clients.",
    // ----------------------------------------
    contact_topic1: "Address",
    contact_message: "If you have any quries related to our products, you can send us a message from here. It's our pleasure to help you.",
    contact_topic_text: "Send us a message",
    contact_address1: "Siam Charn Co., Ltd.",
    contact_address2: "40 Moo 11 Suksawat Road Naiklongbangplakod",
    contact_address3: "Prasamutchedi Samutprakarn 10290",
    contact_topic2: "Phone",
    contact_topic3: "Email",
    button1: "Find Out More",
    button2: "Find Out More",
    button3: "Find Out More",
    button4: "Find Out More",
    button5: "Find Out More",
    button6: "Find Out More",
    button7: "Find Out More",
    button8: "Find Out More",
    button9: "Find Out More",
    button10: "Find Out More",
    button11: "Find Out More",
    button12: "Find Out More",
    // ----------------------------------------
    spare_h1: "OUR PROMISE TO YOU",
    spare1_h2: "High-quality parts",
    spare2_h2: "Expert servicing",
    spare3_h2: "On-site stock",
    spare_h5: "Breakdowns and Spares",
    spare1_p: "At Siam Charn, we're dedicated to exceptional after-sales service. Our expert technicians ensure peak performance for your systems, machines, and spare parts, guaranteeing top-quality products for your peace of mind.",
    spare2_p: "We only use genuine, spare parts that are manufacturer-certified and supplied directly from the source.",
    spare3_p: "Our engineers are highly skilled in addressing common faults and unexpected issues.",
    spare4_p: "Our on-site inventory offers a wide and comprehensive range of available stock for your convenience.",
    spare5_p: "At Siam Charn, we're dedicated to minimizing machinery downtime and maximizing your revenue. Whether you're facing minor glitches or complete breakdowns, we're here to swiftly resolve the issue. Our highly qualified technicians offer a full spectrum of services, from new machinery installations to rapid repairs and emergency call-outs, all delivered with professionalism and efficiency. Trust Siam Charn to keep your operations running smoothly and your revenue flowing.",
    spare6_p: "For spare parts inquiries, purchases, order tracking, or for service-related matters, reach out to our team at",
    spare7_p: "or email",
    spare_label1: "Accessories",
    spare_label2: "Saw Blade",
    spare_label3: "Saw Blade Sharpening Stone",
    spare_label4: "Pipe Making Equipment",
    spare_label5: "Spare Parts for Seam Scraper",
    spare_product: "Machine Spare Parts",
    our_machine: "Our Machines",
    rec_machine: "Recommended Machines",
    food1_label: "Machines for Glass Bottle, PET Bottle, PP Bottle",
    food2_label: "Machines for Ready-made bags (e.g., a bag with a zipper on top )",
    food3_label: "Machines for Bags from Film Rolls",
    food4_label: "Machines for Can",
    food5_label: "Packaging Machinery and Robot Automation",
    food_p: "Welcome to the Food and Beverage Industry industry section. Our cutting-edge machines craft Glass Bottles, PET Bottles, PP Bottles, Ready-made bags with zippers, film roll-based bags, and cans. We empower your packaging solutions for freshness, convenience, and sustainability, ensuring your products stand out in today's competitive market. Explore innovation with us, where precision and flexibility meet industry demands.",
    food_h2: "Food and Beverage Industry",
    metal_h2: "Ferrous and Non-ferrous Metal",
    metal_p: "Welcome to the ferrous and non-ferrous metal industry section. We specialize in providing top-tier machinery for sheet and plate processing, coil handling, H beam and structural shape production, pipe work, deformed bar and wire work, and advanced automation systems. With our cutting-edge technology, we drive efficiency and precision in metal fabrication, empowering businesses to shape the future of structural and industrial solutions. Discover innovation and reliability in every machine we offer.",
    metal1_label: "Machines for Steel Coils",
    metal2_label: "Machines for Metal Sheets or Plates",
    metal3_label: "Machines for H Beam and all structure shapes",
    metal4_label: "Machines for Metal Tube",
    metal5_label: "Machines for Deformed Bar and Wire",
    metal6_label: "Automation of Processes",
    machine_details: "Details",
    machine_swipe: "Swipe To See More",
    a_details: "Ask For Details",
    a_quotation: "Ask For Quotation",
    machine_name: "Machine Name",
    machine_find: "Find Out More",
    // ----------------------------------------
    livestock_h2: "Livestock Feed and Packing",
    livestock_p: " Welcome to the livestock food production and packaging industry section, where precision and efficiency are paramount. Our machines, including Corn Dryers, Hammer Mills, Roller Mills, and more, empower your operations for optimal feed quality. From ingredient dosing to bagging, palletizing, and data management, we provide comprehensive solutions. Elevate your livestock feed production with our cutting-edge technology and expert support.",
    livestock_label: "Machines for Livestock Food Production and Packaging",
    // ----------------------------------------
    warehouse_h2: "Automated Warehouse",
    warehouse_p: "Welcome to our Automated Warehouse Section, where efficiency meets innovation. We specialize in smart warehouse design, product shelving solutions, and advanced automation systems like AGV and RGV. Our driverless forklifts and stacker cranes optimize operations. Explore our expertise in automation technologies like WMS, PLC, HMI, SCADA, MES, and ERP to streamline your warehouse management for peak performance.",
    warehouse_label: "Smart Automated Warehouse",
    our_product: "Our Products",
    // ----------------------------------------
    // ----------------------------------------
    agricultural_h2: "Agricultural and Starch Processing",
    agricultural_p: "Welcome to the agricultural and starch processing industry section. We are dedicated to delivering advanced machinery solutions tailored to your exacting requirements. Our offerings encompass a range of precision equipment. Join us in elevating your agricultural and starch processing endeavors to new heights of professionalism, efficiency, and quality.",
    agricultural_label1: "Machines for Processing Agricultural Products and Flour",
    agricultural_label2: "Automation of Production Line",
    // ----------------------------------------
    pharmaceutical_h2: "Pharmaceutical Industry",
    pharmaceutical_p: "Welcome to the pharmaceutical industry section. We specialize in providing advanced machinery for drug and medical supply production, alongside cutting-edge filling machine for collapsible tube. Our technology ensures precision, quality, and compliance with industry standards, contributing to the delivery of safe and effective healthcare products. Join us in advancing pharmaceutical manufacturing, meeting the critical needs of healthcare with innovation and excellence.",
    pharmaceutical_label1: "Machines for Medicine and Medical Supplies",
    pharmaceutical_label2: "Machines for Collapsible Tube, Packaging Machinery and Robot Automation",
    // ----------------------------------------
    cosmetic_h2: "Cosmetic Production",
    cosmetic_p: "Welcome to the cosmetic production section. We specialize in providing machinery for filling and packaging glass and plastic bottles, collapsible tubes, and cosmetic containers. Our cutting-edge equipment ensures precision and efficiency in the production process, while our lipstick-making machines enable you to craft stunning cosmetic products. Join us in elevating your cosmetic production to new heights of quality and innovation.",
    cosmetic_label1: "Machines for Glass Bottle,and Plastic Bottle",
    cosmetic_label2: "Machines for Filling Collapsible Tube",
    cosmetic_label3: "Machines for Cosmetic Containers",
    cosmetic_label4: "Machines for Lipstick",
    // ----------------------------------------
    wooden_h2: "Wooden Board Industry",
    wooden_p: "Welcome to the wooden board industry section. We offer an array of machinery, including MDF, HDF, and PB wood board making machines, as well as plywood manufacturing equipment, to empower your woodworking endeavors. With our technology, you can transform raw materials into exquisite Woodpieces that define quality and durability.",
    wooden_label: "Machines for Making Wooden Board",
    // ----------------------------------------
    construction_h2: "Construction Materials and Precast",
    construction_p: "Welcome to our Construction Materials and Precast section. We offer a wide range of cutting-edge machinery designed to streamline and enhance the production of high-quality building materials. Explore our equipments tailored to meet your construction needs and elevate your projects to new heights.",
    construction_label: "Machines for Construction Materials and Precast",
    // ----------------------------------------
    energy_h2: "Energy and Biomass Energy",
    energy_p: "Welcome to our Energy and Biomass Energy division.We specialize in providing cutting- edge machinery designed to harness the power of renewable biomass resources.Our solutions offer sustainable and efficient ways to generate energy while minimizing environmental impact.Explore our range of innovative machines, tailored to meet your energy needs, and join us in shaping a greener and more sustainable future.",
    energy_label: "Machines for Energy/Biomass Energy",
    // ----------------------------------------
    automotive_h2: "Automotive Production",
    automotive_p: "Welcome to our automotive production section. We specialize in providing cutting-edge machinery for automating and enhancing the production of automotive components. Our robots and equipment are tailored to meet the exacting demands of the automotive industry, ensuring precision, efficiency, and quality in every part we help create. Join us in driving innovation and excellence in automotive manufacturing.",
    automotive_label: "Machines and Robots for Automotive Production",
    // ----------------------------------------
    mill_h2: "Mill Machinery",
    mill_p: "Welcome to our Mill Machinery section, We specialize in providing cutting- edge equipment designed to optimize milling processes and enhance productivity.Explore our range of innovative machines tailored to meet the demands of modern milling operations. Whether you're in the food, agriculture, or industrial sector, our mill machinery solutions are promised to elevate your production capabilities and deliver top-quality results.",
    mill_label: "Mill Machinery",
    footer_col1: " At Siam Charn, we are dedicated to enhancing our customer benefits through a blend of top-quality products, cutting-edge designs, and impeccable services. Your success is our utmost priority.",
    foot_quick: "Quick Contact",
    foot_fb: "Follow us",
    foot_links: "Links",
    foot_home: "Home",
    foot_about: "About Us",
    foot_products: "Industry Products",
    foot_spare: "Spares and Maintenance",
    foot_contact: "Contact Us",
    foot_office: "Office",
    foot_siam: "Siam Charn Co., Ltd.",
    foot_address1: "40 Moo 11 Suksawat Road Naiklongbangplakod",
    foot_address2: "Prasamutchedi Samutprakarn 10290",
};


function renderlang() {
    console.log('hello');
    if (!localStorage.lang) {
        localStorage.setItem("lang", "en");

        updateText();
    } else {
        updateText();
    }

}

function updateText() {
    for (let i = 0; i <= name_array.length; i++) {
        var cat = '#' + name_array[i];
        $(cat).text(settext(name_array[i]));
    }

    $("#food1_label").text(settext("food1_label"));
    $("#food2_label").text(settext("food2_label"));
    $("#food3_label").text(settext("food3_label"));
    $("#food4_label").text(settext("food4_label"));
    $("#food5_label").text(settext("food5_label"));
    $("#metal1_label").text(settext("metal1_label"));
    $("#metal2_label").text(settext("metal2_label"));
    $("#metal3_label").text(settext("metal3_label"));
    $("#metal4_label").text(settext("metal4_label"));
    $("#metal5_label").text(settext("metal5_label"));
    $("#metal6_label").text(settext("metal6_label"));
    $("#name").text(settext("name"));

}

function settext(key) {
    if (localStorage.lang === "en") {

        return en[key];
    } else {

        return th[key];
    }
}

function togglelangth() {
    localStorage.setItem("lang", "th");
    updateText();
    footerlang();
    // return "now language: " + localStorage.lang;
}
function togglelangen() {
    localStorage.setItem("lang", "en");
    updateText();
    footerlang();
    // return "now language: " + localStorage.lang;
}

// Initialize language when the page loads
document.addEventListener("DOMContentLoaded", function () {
    renderlang();
    footerlang();
});


function footerlang() {
    const footer_col1 = document.getElementById("footer_col1");
    const foot_quick = document.getElementById("foot_quick");
    const foot_fb = document.getElementById("foot_fb");
    const foot_links = document.getElementById("foot_links");
    const foot_home = document.getElementById("foot_home");
    const foot_about = document.getElementById("foot_about");
    const foot_products = document.getElementById("foot_products");
    const foot_spare = document.getElementById("foot_spare");
    const foot_contact = document.getElementById("foot_contact");
    const foot_office = document.getElementById("foot_office");
    const foot_siam = document.getElementById("foot_siam");
    const foot_address1 = document.getElementById("foot_address1");
    const foot_address2 = document.getElementById("foot_siam");
    if (localStorage.lang == 'en') {
        footer_col1.style.fontSize = "14px";
        foot_quick.style.fontSize = "15px";
        foot_fb.style.fontSize = "14px";
        foot_links.style.fontSize = "15px";
        foot_home.style.fontSize = "14px";
        foot_about.style.fontSize = "14px";
        foot_products.style.fontSize = "14px";
        foot_spare.style.fontSize = "14px";
        foot_contact.style.fontSize = "14px";
        foot_office.style.fontSize = "15px";
        foot_siam.style.fontSize = "14px";
        foot_address1.style.fontSize = "14px";
        foot_address2.style.fontSize = "14px";
    } else {
        footer_col1.style.fontSize = "15px";
        foot_quick.style.fontSize = "16px";
        foot_fb.style.fontSize = "15px";
        foot_links.style.fontSize = "16px";
        foot_home.style.fontSize = "15px";
        foot_about.style.fontSize = "15px";
        foot_products.style.fontSize = "15px";
        foot_spare.style.fontSize = "15px";
        foot_contact.style.fontSize = "15px";
        foot_office.style.fontSize = "16px";
        foot_siam.style.fontSize = "15px";
        foot_address1.style.fontSize = "15px";
        foot_address2.style.fontSize = "15px";
    }

}

// window.onload = function () {
//     renderlang();
// };

/* <h2 id="animal_h2">
                        Animal Food Production</h2>
                    <p id="animal_p">
                        Welcome to the pet nutrition and packaging excellence section. Our comprehensive range of
                        equipment, from Hammer Mills to Robot Palletizing, empowers the production and packaging of
                        top-quality cat and dog food. With precision engineering and advanced technology, we ensure that
                        your pet food products meet the highest standards of quality and safety. Join us in delivering
                        nutrition and satisfaction to furry friends worldwide.
                    </p> */