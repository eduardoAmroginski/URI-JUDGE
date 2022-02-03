A, B, C= input().split(" ")
def areaRetangulo(A, C):
    return A*C

def areaCirculo(C):
    pi=3.14159
    return pi*(C**2)

def areaTrapezio(A, B, C):
    return ((A+B)/2)*C

def areaQuadrado(B):
    return B**2

def areaTrianguloRetangulo(A, B):
    return (A*B)/2


retangulo = areaRetangulo(float(A), float(C))
circulo = areaCirculo(float(C))
trapezio = areaTrapezio(float(A), float(B), float(C))
quadrado = areaQuadrado(float(B))
trianguloRetangulo = areaTrianguloRetangulo(float(A), float(B))
print("TRIANGULO: {:.3f}\nCIRCULO: {:.3f}\nTRAPEZIO: {:.3f}\nQUADRADO: {:.3f}\nRETANGULO: {:.3f}".format(trianguloRetangulo, circulo, trapezio, quadrado, retangulo))