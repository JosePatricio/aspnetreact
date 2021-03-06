
CREATE DATABASE [ejercicio1db] 
GO


USE [ejercicio1db]
GO
/****** Object:  Table [dbo].[tb_libro]    Script Date: 11/13/2020 6:52:16 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tb_libro](
	[id_libro] [int] IDENTITY(1,1) NOT NULL,
	[nombre] [varchar](150) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
	[descripcion] [varchar](300) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
	[autor] [varchar](150) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
	[fecha] [date] NOT NULL,
	[ejemplares] [int] NOT NULL,
	[costo] [numeric](15, 4) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[id_libro] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[tb_libro] ON 

INSERT [dbo].[tb_libro] ([id_libro], [nombre], [descripcion], [autor], [fecha], [ejemplares], [costo]) VALUES (1, N'Citas del Presidente', N'Enseñanza de Don Juan', N'Carlos Castaneda', CAST(N'1968-09-28' AS Date), 2, CAST(49.5555 AS Numeric(15, 4)))
INSERT [dbo].[tb_libro] ([id_libro], [nombre], [descripcion], [autor], [fecha], [ejemplares], [costo]) VALUES (2, N'Harry Potter', N'Enseñanza de Don Juan', N'Carlos Castaneda', CAST(N'1968-09-28' AS Date), 2, CAST(49.5555 AS Numeric(15, 4)))
INSERT [dbo].[tb_libro] ([id_libro], [nombre], [descripcion], [autor], [fecha], [ejemplares], [costo]) VALUES (3, N'El Señor de los Anillos ', N'Enseñanza de Don Juan', N'Carlos Castaneda', CAST(N'1968-09-28' AS Date), 2, CAST(49.5555 AS Numeric(15, 4)))
INSERT [dbo].[tb_libro] ([id_libro], [nombre], [descripcion], [autor], [fecha], [ejemplares], [costo]) VALUES (4, N'El Alquimista ', N'Enseñanza de Don Juan', N'Carlos Castaneda', CAST(N'1968-09-28' AS Date), 2, CAST(49.5555 AS Numeric(15, 4)))
INSERT [dbo].[tb_libro] ([id_libro], [nombre], [descripcion], [autor], [fecha], [ejemplares], [costo]) VALUES (5, N'El Código da Vinci ', N'Enseñanza de Don Juan', N'Carlos Castaneda', CAST(N'1968-09-28' AS Date), 2, CAST(49.5555 AS Numeric(15, 4)))
INSERT [dbo].[tb_libro] ([id_libro], [nombre], [descripcion], [autor], [fecha], [ejemplares], [costo]) VALUES (6, N'Crepúsculo ', N'Enseñanza de Don Juan', N'Carlos Castaneda', CAST(N'1968-09-28' AS Date), 2, CAST(49.5555 AS Numeric(15, 4)))
INSERT [dbo].[tb_libro] ([id_libro], [nombre], [descripcion], [autor], [fecha], [ejemplares], [costo]) VALUES (7, N'Lo que el viento se llevó ', N'Enseñanza de Don Juan', N'Carlos Castaneda', CAST(N'1968-09-28' AS Date), 2, CAST(49.5555 AS Numeric(15, 4)))
INSERT [dbo].[tb_libro] ([id_libro], [nombre], [descripcion], [autor], [fecha], [ejemplares], [costo]) VALUES (8, N'I libro de Don Juan8', N'Enseñanza de Don Juan', N'Carlos Castaneda', CAST(N'1968-09-28' AS Date), 2, CAST(49.5555 AS Numeric(15, 4)))
INSERT [dbo].[tb_libro] ([id_libro], [nombre], [descripcion], [autor], [fecha], [ejemplares], [costo]) VALUES (9, N'Ulises', N'Enseñanza de Don Juan', N'Carlos Castaneda', CAST(N'1968-09-28' AS Date), 2, CAST(49.5555 AS Numeric(15, 4)))
INSERT [dbo].[tb_libro] ([id_libro], [nombre], [descripcion], [autor], [fecha], [ejemplares], [costo]) VALUES (10, N'K libro de Don Juan10', N'Enseñanza de Don Juan', N'Carlos Castaneda', CAST(N'1968-09-28' AS Date), 2, CAST(49.5555 AS Numeric(15, 4)))
INSERT [dbo].[tb_libro] ([id_libro], [nombre], [descripcion], [autor], [fecha], [ejemplares], [costo]) VALUES (11, N'L libro de nina Juan11', N'Enseñanza de Don Juan', N'Carlos Castaneda', CAST(N'1968-09-28' AS Date), 2, CAST(49.5555 AS Numeric(15, 4)))
INSERT [dbo].[tb_libro] ([id_libro], [nombre], [descripcion], [autor], [fecha], [ejemplares], [costo]) VALUES (12, N'Slibro de Don Juan12', N'Enseñanza de Don Juan', N'Carlos Castaneda', CAST(N'1968-09-28' AS Date), 2, CAST(49.5555 AS Numeric(15, 4)))
INSERT [dbo].[tb_libro] ([id_libro], [nombre], [descripcion], [autor], [fecha], [ejemplares], [costo]) VALUES (13, N'T libro de Don Juan13', N'Enseñanza de Don Juan', N'Carlos Castaneda', CAST(N'1968-09-28' AS Date), 2, CAST(49.5555 AS Numeric(15, 4)))
INSERT [dbo].[tb_libro] ([id_libro], [nombre], [descripcion], [autor], [fecha], [ejemplares], [costo]) VALUES (14, N'U libro de Don Juan14', N'Enseñanza de Don Juan', N'Carlos Castaneda', CAST(N'1968-09-28' AS Date), 2, CAST(49.5555 AS Numeric(15, 4)))
SET IDENTITY_INSERT [dbo].[tb_libro] OFF
GO

