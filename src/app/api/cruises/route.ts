import { NextRequest, NextResponse } from 'next/server';
import {
  getAllCruiseInfos,
  getCruiseInfoById,
  addCruiseInfo,
  updateCruiseInfo,
  deleteCruiseInfo,
  CruiseInfo
} from '../../../data/cruises';

// GET /api/cruises - 모든 크루즈 정보 조회 또는 카테고리별 조회
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const cruiseName = searchParams.get('cruiseName');
    const id = searchParams.get('id');

    if (id) {
      const cruise = getCruiseInfoById(id);
      if (!cruise) {
        return NextResponse.json({ error: '크루즈 정보를 찾을 수 없습니다.' }, { status: 404 });
      }
      return NextResponse.json(cruise);
    }

    let cruises = getAllCruiseInfos();

    if (category) {
      cruises = cruises.filter(cruise => cruise.category === category);
    }

    if (cruiseName) {
      cruises = cruises.filter(cruise => cruise.cruiseName === cruiseName);
    }

    return NextResponse.json(cruises);
  } catch (error) {
    console.error('크루즈 정보 조회 오류:', error);
    return NextResponse.json({ error: '서버 오류가 발생했습니다.' }, { status: 500 });
  }
}

// POST /api/cruises - 새 크루즈 정보 추가
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // 필수 필드 검증
    const requiredFields = ['category', 'cruiseName', 'roomName'];
    for (const field of requiredFields) {
      if (!(field in body)) {
        return NextResponse.json({ error: `${field} 필드가 필요합니다.` }, { status: 400 });
      }
    }

    const newCruise = addCruiseInfo({
      category: body.category,
      cruiseName: body.cruiseName,
      cruiseImage: body.cruiseImage,
      roomName: body.roomName,
      roomImage: body.roomImage,
      roomArea: body.roomArea,
      roomDescription: body.roomDescription,
      roomUrl: body.roomUrl,
    });

    return NextResponse.json(newCruise, { status: 201 });
  } catch (error) {
    console.error('크루즈 정보 추가 오류:', error);
    return NextResponse.json({ error: '크루즈 정보 추가에 실패했습니다.' }, { status: 500 });
  }
}

// PUT /api/cruises - 크루즈 정보 업데이트
export async function PUT(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: '크루즈 ID가 필요합니다.' }, { status: 400 });
    }

    const body = await request.json();
    const updatedCruise = updateCruiseInfo(id, body);

    if (!updatedCruise) {
      return NextResponse.json({ error: '크루즈를 찾을 수 없습니다.' }, { status: 404 });
    }

    return NextResponse.json(updatedCruise);
  } catch (error) {
    console.error('크루즈 정보 업데이트 오류:', error);
    return NextResponse.json({ error: '크루즈 정보 업데이트에 실패했습니다.' }, { status: 500 });
  }
}

// DELETE /api/cruises - 크루즈 정보 삭제
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: '크루즈 ID가 필요합니다.' }, { status: 400 });
    }

    const success = deleteCruiseInfo(id);

    if (!success) {
      return NextResponse.json({ error: '크루즈를 찾을 수 없습니다.' }, { status: 404 });
    }

    return NextResponse.json({ message: '크루즈 정보가 삭제되었습니다.' });
  } catch (error) {
    console.error('크루즈 정보 삭제 오류:', error);
    return NextResponse.json({ error: '크루즈 정보 삭제에 실패했습니다.' }, { status: 500 });
  }
}