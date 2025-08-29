# emergency-hotline

1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
   Answer:-
   getElementById শুধু একটিমাত্র element ধরে, যেটার id মিলে যায়, এটা দিয়ে কোনো unique element কে ধরবো। id selector এর নামকরন ভুল হলে null পাবো। এটা দিয়ে সরাসরি কাজ করা যাবে।

   getElementsByClassName এটা দিয়ে অনেক গুলি element কে ধরতে পারবো class এর মাধ্যমে একই নামের যতগুলো class আছে সবগুলি কে ধরতে পারবো। এটা দিবে HTMLCollection । এটা দিয়ে সরাসরি কাজ করা যাবে না তাই এখানে চাইলে for of লুপ ব্যাবহার করতে পারবো।

   querySelector এটা ধরে কাজ করলে css এর মতন করে element ধরা যায়।
   আর id ধরলে শুরুতে # নিবো, আর class ধরলে শুরুতে . (ডট) নিবো।
   এটা অনেকটা getElementById এর মতন এটা শুধু প্রথম মিলে যাওয়া element ধরবে আর এটা দিয়ে সরাসরি কাজ করা যাবে।
   আর হ্যাঁ এর নামকরন ভুল হলে getElementById এর মতন null পাবো এখানেও।

   querySelectorAll এটা ধরে কাজ করলে css মতন করে element ধরা যায়।
   এটা দিয়ে অনেক গুলি element কে ধরতে পারবো class এর মাধ্যমে একই নামের যতগুলো class আছে সবগুলি কে ধরতে পারবো।
   আর id ধরলে শুরুতে # নিবো, আর class ধরলে শুরুতে . (ডট) নিবো। এটা অনেকটা getElementsByClassName এর মতন তবে এটা HTMLCollection দিবে না এটা সবগুলো element এর NodeList দেয়।
   এর selector নামকরন ভুল হলে empty NodeList [ ] পাবো। এটা দিয়ে সরাসরি কাজ করা যাবে না for of , for Each ব্যাবহার করতে পারবো।

2. How do you create and insert a new element into the DOM?
   Answer:-
   আগে একটা element তৈরি করতে হয় document.createElement দিয়ে তার পর তার মধ্যে element tag যোগ করবো।
   শেষে যেকোনো parent element এ appendChild এর মধ্যে তৈরি করা element টা ঢুকিয়ে দিবো তাহলেই হয়ে যাবে।

3. What is Event Bubbling and how does it work?
   Answer:-
   Event bubbiling মানে হলো যখন কোনো child element এ event ঘটে যেমনঃ- click event করি আমরা তখন event টা প্রথমে সেই element এ ধরবে যেটাতে click event করছিলাম।
   এর পর ধাপে ধাপে তার parent এ কোনো event থাকলে সেটাও কাজ করবে এমন করে একদম document পর্যন্ত চলে যায়।

4. What is Event Delegation in JavaScript? Why is it useful?
   Answer:-
   Event Delegation হচ্ছে parent element এ event listener বসানো যাতে child element গুলিতে আলাদা করে event বসাতে না হয়।
   এক কথায় যদি বলি আমি event টাকে যেটার উপরে ঘটাতে চাই সেটার উপরে event add না করে তার parent এ event add করে দিবো।
   কাজের নিয়ম ও আছে এখানে parent এ event ধরবে, আর event.target দেখে বুঝা যাবে আসল event কোন child এ ঘটেছে ।
   এটার সুবিধা হচ্ছে ঃ- নতুন child element যোগ হলেও parent এ বসানো event কাজ করবে ।
   আর তাই performance ভাল হয় একেক child এ আলাদা আলাদা event বসাতে হয় না।

5. What is the difference between preventDefault() and stopPropagation() methods?
   Answer:-
   preventDefault() হচ্চে কোনো element এর default কাজ বন্ধ করে দেওয়া যেমনঃ- আমরা form submit করলে page reload হয় সেটা preventDefault() দিয়ে আটকানো যায়।
   stopPropagation() হচ্ছে event bubbling উপরে উঠা বন্ধ করে দেওয়া যেমনঃ- stopPropagation() দিয়ে আটকানো যায়।
