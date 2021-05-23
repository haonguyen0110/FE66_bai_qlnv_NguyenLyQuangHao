var nhanVien = {
    tenNhanVien: '',
    maNhanVien: '',
    luongCB: 0,
    chucVu: '',
    gioLam: 0 ,
    tinhTongLuong: function (){
        var tongLuong = Number(this.luongCB);
        if (this.chucVu == 'Giám đốc'){
            tongLuong = tongLuong * 3;
        }else if (this.chucVu == 'Sếp'){
            tongLuong = tongLuong * 2;
        }
        return tongLuong;
    },
    xepLoai: function (){
        var outPut;
        if (Number(this.gioLam) > 50 && Number(this.gioLam) <= 80){
            outPut = 'Nhân viên trung bình';
        }else if (Number(this.gioLam) > 80 && Number(this.gioLam) <=100) {
            outPut = 'Nhân viên khá';
        }else if (Number(this.gioLam) > 100 && Number(this.gioLam) <= 120) {
            outPut ='Nhân viên giỏi';
        }else if (Number(this.gioLam) >120){
            outPut ='Nhân viên xuất sắc';
        }else {
            outPut = 'Không hợp lệ';
        }
        return outPut;
    }
};
document.querySelector('#btnHienThi').onclick = function (event){
    event.preventDefault();
    nhanVien.maNhanVien = document.querySelector('#maNhanVien').value;
    nhanVien.tenNhanVien = document.querySelector('#tenNhanVien').value;
    nhanVien.chucVu = document.querySelector('#chucVu').value;
    nhanVien.luongCB = document.querySelector('#luongCoBan').value;
    nhanVien.gioLam = document.querySelector('#gioLam').value;
    console.log(nhanVien);
    var tongLuong = nhanVien.tinhTongLuong();


    document.querySelector('#txtMaNhanVien').innerHTML= nhanVien.maNhanVien;
    document.querySelector('#txtTenNhanVien').innerHTML = nhanVien.tenNhanVien;
    document.querySelector('#txtChucVu').innerHTML = nhanVien.chucVu;
    document.querySelector('#txtTongLuong').innerHTML = tongLuong;
    document.querySelector('#txtXepLoai').innerHTML = nhanVien.xepLoai();
}


