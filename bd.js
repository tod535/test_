create table material_type (
	id int primary key,
	name text not null,
	percent int not null
);

insert into material_type (id, name, percent) values (1,'Бумага', '70');
insert into material_type (id, name, percent) values (2,'Краска', '50');
insert into material_type (id, name, percent) values (3,'Клей', '15');
insert into material_type (id, name, percent) values (4,'Дисперсия', '20');

create table Materials_import(
	id int primary key,
	type_id int not null,
	name text not null,
	price float not null
);
alter table Materials_import
	add constraint Materials_import foreign key (type_id) references material_type (id);

insert into Materials_import (id, type_id, name, price ) values(1, 1, 'Бумага-основа с покрытием для флизелиновых обоев', 1700);
insert into Materials_import (id, type_id, name, price ) values(2, 1, 'Бумага-основа для флизелиновых обоев', 1500);
insert into Materials_import (id, type_id, name, price ) values(3, 1, 'Бумага обойная для вспененных виниловых обоев', 1200);
insert into Materials_import (id, type_id, name, price ) values(4, 2, 'Концентрат водоразбавляемой печатной краски', 1500);
insert into Materials_import (id, type_id, name, price ) values(5, 2, 'Перламутровый пигмент', 3100 );
insert into Materials_import (id, type_id, name, price ) values(6, 3, 'Сухой клей на основе ПВС', 360 );
insert into Materials_import (id, type_id, name, price ) values(7, 1, 'Флизелин', 160 );
insert into Materials_import (id, type_id, name, price ) values(8, 4, 'Стирол-акриловая дисперсия для производства обоев', 14.90 );
insert into Materials_import (id, type_id, name, price ) values(9, 4, 'Стирол-акриловая дисперсия для гидрофобных покрытий', 14.90 );
insert into Materials_import (id, type_id, name, price ) values(10, 4, 'Акрилат-винилацетатная дисперсия для производства бумаги', 15.5 );
insert into Materials_import (id, type_id, name, price ) values(11, 2, 'Цветная пластизоль', 650 );
insert into Materials_import (id, type_id, name, price ) values(12, 3, 'Дисперсия анионно-стабилизированного стирол-акрилового сополимера', 170 );
insert into Materials_import (id, type_id, name, price ) values(13, 2, 'Водорастворимая краска водная', 500 );
insert into Materials_import (id, type_id, name, price ) values(14, 4, 'Диспергатор минеральных пигментов и наполнителей', 16 );
insert into Materials_import (id, type_id, name, price ) values(15, 4, 'Ассоциативный акриловый загуститель', 16.5 );
insert into Materials_import (id, type_id, name, price ) values(16, 2, 'Водорастворимая краска спецводная', 700 );
insert into Materials_import (id, type_id, name, price ) values(17, 2, 'Металлический пигмент', 4100 );
insert into Materials_import (id, type_id, name, price ) values(18, 4, 'Акриловая дисперсия', 14.9 );
insert into Materials_import (id, type_id, name, price ) values(19, 1, 'Бумага-основа для обоев марки АФ', 1200 );
insert into Materials_import (id, type_id, name, price ) values(20, 1, 'Бумага с подложкой устойчивая к атмосферным воздействиям', 3500);



create table Product_type_import (
	id int primary key,
	name text not null,
    coef float not null
);
insert into Product_type_import (id, name, coef) values(1, 'Декоративные обои', 5.5);
insert into Product_type_import (id, name, coef) values(2, 'Фотообои', 7.54);
insert into Product_type_import (id, name, coef) values(3, 'Обои под покраску', 3.25);
insert into Product_type_import (id, name, coef) values(4, 'Стеклообои', 2.5);

	create table Products_import (
	id int primary key,
	type_id int not null,
	name text not null,
	articul text not null,
	min_price float not null
);



alter table Products_import
	add constraint Products_import_id foreign key (type_id) references Product_type_import (id);
	
	insert into Products_import (id, type_id, name, articul,min_price) values(1, 1, 'Обои из природного материала Традиционный принт светло-коричневые' , '1549922' ,16950);
	insert into Products_import (id, type_id, name, articul,min_price) values(2, 2, 'Фотообои флизелиновые Горы 500x270 см' ,'2018556' ,15880);
	insert into Products_import (id, type_id, name, articul,min_price) values(3, 3, 'Обои под покраску флизелиновые Рельеф' ,'3028272' ,11080);
	insert into Products_import (id, type_id, name, articul,min_price) values(4, 4, 'Стеклообои Рогожка белые' ,'4029272' ,5898);
	insert into Products_import (id, type_id, name, articul,min_price) values(5, 1, 'Обои флизелиновые Эвелин светло-серые' ,'1028248' ,15200);
	insert into Products_import (id, type_id, name, articul,min_price) values(6, 2, 'Фотообои флизелиновые 3D Лес и горы 300x280 см' ,'2118827' ,12500.96);
	insert into Products_import (id, type_id, name, articul,min_price) values(7, 3, 'Обои под покраску флизелиновые цвет белый' ,'3130981' ,4320.56);
	insert into Products_import (id, type_id, name, articul,min_price) values(8, 4, 'Стеклохолст' ,'4029784' ,2998.99);
	insert into Products_import (id, type_id, name, articul,min_price) values(9, 1, 'Флизелиновые обои Принт Вензель серые' ,'1658953' ,16200.96);
	insert into Products_import (id, type_id, name, articul,min_price) values(10, 2, 'Фотообои флизелиновые Узор 300x270 см' ,'2026662' ,8780.69);
	insert into Products_import (id, type_id, name, articul,min_price) values(11, 3, 'Обои под покраску флизелиновые Кирпичная стена' ,'3159043' ,15750);
	insert into Products_import (id, type_id, name, articul,min_price) values(12, 4, 'Стеклообои Средняя елка белые' ,'4588376' ,5500);
	insert into Products_import (id, type_id, name, articul,min_price) values(13, 1, 'Обои бумажные Полосы цвет бежевый' ,'1758375' ,13500.96);
	insert into Products_import (id, type_id, name, articul,min_price) values(14, 2, 'Фотообои Тропики 290x260 см' ,'2759324' ,6980);
	insert into Products_import (id, type_id, name, articul,min_price) values(15, 3, 'Обои под покраску Рисунок Штукатурка белые' ,'3118827' ,5890);
	insert into Products_import (id, type_id, name, articul,min_price) values(16, 4, 'Стеклообои Геометрические фигуры белые' ,'4559898' ,5369);
	insert into Products_import (id, type_id, name, articul,min_price) values(17, 1, 'Обои флизелиновые Лилия бежевые' ,'1259474' ,9750.79);
	insert into Products_import (id, type_id, name, articul,min_price) values(18, 2, 'Фотообои флизелиновые 3D Пейзаж 300x280 см' ,'2115947' ,16850);
	insert into Products_import (id, type_id, name, articul,min_price) values(19, 3, 'Обои под покраску флизелиновые однотонные цвет белый' ,'3033136' ,3390);
	insert into Products_import (id, type_id, name, articul,min_price) values(20, 4, 'Стеклохолст малярный Паутинка' ,'4028048' ,1750);

create table Product_materials_import (
	id int primary key,
	name text not null,
    quantity float not null
);
insert into Product_materials_import (id, name,quantity) values(1 ,'Акрилат-винилацетатная дисперсия для производства бумаги'	,1.95);
insert into Product_materials_import (id, name,quantity) values(2 ,'Акрилат-винилацетатная дисперсия для производства бумаги'	,0.21);
insert into Product_materials_import (id, name,quantity) values(3 ,'Акриловая дисперсия' ,1.50);
insert into Product_materials_import (id, name,quantity) values(4 ,'Акриловая дисперсия' ,1.00);
insert into Product_materials_import (id, name,quantity) values(5 ,'Акриловая дисперсия' ,1.00);
insert into Product_materials_import (id, name,quantity) values(6 ,'Ассоциативный акриловый загуститель' ,0.50);
insert into Product_materials_import (id, name,quantity) values(7 ,'Ассоциативный акриловый загуститель' ,0.50);
insert into Product_materials_import (id, name,quantity) values(8 ,'Бумага обойная для вспененных виниловых обоев' ,2.55);
insert into Product_materials_import (id, name,quantity) values(9 ,'Бумага обойная для вспененных виниловых обоев' ,3.60);
insert into Product_materials_import (id, name,quantity) values(10 ,'Бумага обойная для вспененных виниловых обоев' ,2.50);
insert into Product_materials_import (id, name,quantity) values(11 ,'Бумага с подложкой устойчивая к атмосферным воздействиям'	,2.90);
insert into Product_materials_import (id, name,quantity) values(12 ,'Бумага с подложкой устойчивая к атмосферным воздействиям'	,2.55);
insert into Product_materials_import (id, name,quantity) values(13 ,'Бумага с подложкой устойчивая к атмосферным воздействиям'	,1.80);
insert into Product_materials_import (id, name,quantity) values(14 ,'Бумага с подложкой устойчивая к атмосферным воздействиям'	,2.20);
insert into Product_materials_import (id, name,quantity) values(15 ,'Бумага с подложкой устойчивая к атмосферным воздействиям'	,3.40);
insert into Product_materials_import (id, name,quantity) values(16 ,'Бумага-основа для обоев марки АФ'	,3.60);
insert into Product_materials_import (id, name,quantity) values(17 ,'Бумага-основа для обоев марки АФ'	,3.70);
insert into Product_materials_import (id, name,quantity) values(18 ,'Бумага-основа для обоев марки АФ'	,1.60);
insert into Product_materials_import (id, name,quantity) values(19 ,'Бумага-основа для обоев марки АФ'	,3.56);
insert into Product_materials_import (id, name,quantity) values(20 ,'Бумага-основа для флизелиновых обоев'	,4.60);
insert into Product_materials_import (id, name,quantity) values(21 ,'Бумага-основа с покрытием для флизелиновых обоев' ,2.50);
insert into Product_materials_import (id, name,quantity) values(22 ,'Бумага-основа с покрытием для флизелиновых обоев' ,3.50);
insert into Product_materials_import (id, name,quantity) values(23 ,'Водорастворимая краска спецводная' ,3.50);
insert into Product_materials_import (id, name,quantity) values(24 ,'Водорастворимая краска спецводная' ,5.25);
insert into Product_materials_import (id, name,quantity) values(25 ,'Водорастворимая краска спецводная' ,5.00);
insert into Product_materials_import (id, name,quantity) values(26 ,'Водорастворимая краска спецводная' ,3.50);
insert into Product_materials_import (id, name,quantity) values(27 ,'Водорастворимая краска водная' ,4.75);
insert into Product_materials_import (id, name,quantity) values(28 ,'Водорастворимая краска водная' ,3.00);
insert into Product_materials_import (id, name,quantity) values(29 ,'Диспергатор минеральных пигментов и наполнителей'	,1.30);
insert into Product_materials_import (id, name,quantity) values(30 ,'Диспергатор минеральных пигментов и наполнителей'	,1.30);
insert into Product_materials_import (id, name,quantity) values(31 ,'Диспергатор минеральных пигментов и наполнителей'	,1.80);
insert into Product_materials_import (id, name,quantity) values(32 ,'Диспергатор минеральных пигментов и наполнителей'	,0.20);
insert into Product_materials_import (id, name,quantity) values(33 ,'Диспергатор минеральных пигментов и наполнителей'	,0.20);
insert into Product_materials_import (id, name,quantity) values(34 ,'Диспергатор минеральных пигментов и наполнителей'	,0.25);
insert into Product_materials_import (id, name,quantity) values(35 ,'Дисперсия анионно-стабилизированного стирол-акрилового сополимера'	,0.20);
insert into Product_materials_import (id, name,quantity) values(36 ,'Дисперсия анионно-стабилизированного стирол-акрилового сополимера'	,0.20);
insert into Product_materials_import (id, name,quantity) values(37 ,'Дисперсия анионно-стабилизированного стирол-акрилового сополимера'	,0.50);
insert into Product_materials_import (id, name,quantity) values(38 ,'Дисперсия анионно-стабилизированного стирол-акрилового сополимера'	,0.20);
insert into Product_materials_import (id, name,quantity) values(39 ,'Дисперсия анионно-стабилизированного стирол-акрилового сополимера'	,0.25);
insert into Product_materials_import (id, name,quantity) values(40 ,'Дисперсия анионно-стабилизированного стирол-акрилового сополимера'	,0.50);
insert into Product_materials_import (id, name,quantity) values(41 ,'Дисперсия анионно-стабилизированного стирол-акрилового сополимера'	,0.50);
insert into Product_materials_import (id, name,quantity) values(42 ,'Дисперсия анионно-стабилизированного стирол-акрилового сополимера'	,0.70);
insert into Product_materials_import (id, name,quantity) values(43 ,'Дисперсия анионно-стабилизированного стирол-акрилового сополимера'	,1.00);
insert into Product_materials_import (id, name,quantity) values(44 ,'Дисперсия анионно-стабилизированного стирол-акрилового сополимера'	,0.50);
insert into Product_materials_import (id, name,quantity) values(45 ,'Концентрат водоразбавляемой печатной краски'	,2.55);
insert into Product_materials_import (id, name,quantity) values(46 ,'Концентрат водоразбавляемой печатной краски'	,2.00);
insert into Product_materials_import (id, name,quantity) values(47 ,'Концентрат водоразбавляемой печатной краски'	,2.00);
insert into Product_materials_import (id, name,quantity) values(48 ,'Концентрат водоразбавляемой печатной краски'	,1.00);
insert into Product_materials_import (id, name,quantity) values(49 ,'Металлический пигмент'	,0.45);
insert into Product_materials_import (id, name,quantity) values(50 ,'Металлический пигмент'	,0.30);
insert into Product_materials_import (id, name,quantity) values(51 ,'Металлический пигмент'	,1.00);
insert into Product_materials_import (id, name,quantity) values(52 ,'Перламутровый пигмент'	,1.00);
insert into Product_materials_import (id, name,quantity) values(53 ,'Перламутровый пигмент'	,0.50);
insert into Product_materials_import (id, name,quantity) values(54 ,'Перламутровый пигмент'	,0.35);
insert into Product_materials_import (id, name,quantity) values(55 ,'Перламутровый пигмент'	,1.25);
insert into Product_materials_import (id, name,quantity) values(56 ,'Стирол-акриловая дисперсия для гидрофобных покрытий'	,1.00);
insert into Product_materials_import (id, name,quantity) values(57 ,'Стирол-акриловая дисперсия для гидрофобных покрытий'	,1.00);
insert into Product_materials_import (id, name,quantity) values(58 ,'Стирол-акриловая дисперсия для производства обоев'	,0.15);
insert into Product_materials_import (id, name,quantity) values(59 ,'Стирол-акриловая дисперсия для производства обоев'	,1.00);
insert into Product_materials_import (id, name,quantity) values(60 ,'Стирол-акриловая дисперсия для производства обоев'	,1.20);
insert into Product_materials_import (id, name,quantity) values(61 ,'Стирол-акриловая дисперсия для производства обоев'	,1.20);
insert into Product_materials_import (id, name,quantity) values(62 ,'Стирол-акриловая дисперсия для производства обоев'	,1.00);
insert into Product_materials_import (id, name,quantity) values(63 ,'Стирол-акриловая дисперсия для производства обоев'	,1.20);
insert into Product_materials_import (id, name,quantity) values(64 ,'Стирол-акриловая дисперсия для производства обоев'	,0.33);
insert into Product_materials_import (id, name,quantity) values(65 ,'Сухой клей на основе ПВС' ,0.50);
insert into Product_materials_import (id, name,quantity) values(66 ,'Сухой клей на основе ПВС' ,2.90);
insert into Product_materials_import (id, name,quantity) values(67 ,'Сухой клей на основе ПВС' ,1.40);
insert into Product_materials_import (id, name,quantity) values(68 ,'Сухой клей на основе ПВС' ,1.70);
insert into Product_materials_import (id, name,quantity) values(69 ,'Сухой клей на основе ПВС' ,0.30);
insert into Product_materials_import (id, name,quantity) values(70 ,'Сухой клей на основе ПВС' ,1.00);
insert into Product_materials_import (id, name,quantity) values(71 ,'Флизелин' ,1.50);
insert into Product_materials_import (id, name,quantity) values(72 ,'Флизелин' ,2.50);
insert into Product_materials_import (id, name,quantity) values(73 ,'Флизелин' ,1.75);
insert into Product_materials_import (id, name,quantity) values(74 ,'Флизелин' ,1.85);
insert into Product_materials_import (id, name,quantity) values(75 ,'Флизелин' ,2.20);
insert into Product_materials_import (id, name,quantity) values(76 ,'Флизелин' ,1.30);
insert into Product_materials_import (id, name,quantity) values(77 ,'Флизелин' ,0.80);
insert into Product_materials_import (id, name,quantity) values(78 ,'Цветная пластизоль' ,1.65);
insert into Product_materials_import (id, name,quantity) values(79 ,'Цветная пластизоль' ,1.25);
insert into Product_materials_import (id, name,quantity) values(80 ,'Цветная пластизоль' ,1.00);
